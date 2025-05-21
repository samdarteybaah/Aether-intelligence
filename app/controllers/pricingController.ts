// Loader for pricing: loads pricing settings and boundaries
import prisma from "../db.server";
import type { LoaderFunction, ActionFunction } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import * as models from "../models/core";

export const loader: LoaderFunction = async () => {
  const boundaries = await prisma.productPriceBoundary.findMany();
  return json({ boundaries });
};

export const action: ActionFunction = async ({ request }) => {
  const form = await request.formData();
  const productId = form.get("productId") as string;
  const min = parseFloat(form.get("min") as string);
  const max = parseFloat(form.get("max") as string);
  const oldMin = parseFloat(form.get("oldMin") as string);
  const oldMax = parseFloat(form.get("oldMax") as string);
  const dynamicPricingEnabled = form.get("dynamicPricingEnabled") === "on";

  await prisma.productPriceBoundary.upsert({
    where: { productId },
    update: { minPrice: min, maxPrice: max, dynamicPricingEnabled },
    create: { productId, minPrice: min, maxPrice: max, dynamicPricingEnabled },
  });

  // // Audit log
  // if (min !== oldMin || max !== oldMax) {
  //   await prisma.priceAuditLog.create({
  //     data: {
  //       productId,
  //       oldPrice: oldMin,
  //       newPrice: min,
  //     },
  //   });
  //   await prisma.priceAuditLog.create({
  //     data: {
  //       productId,
  //       oldPrice: oldMax,
  //       newPrice: max,
  //     },
  //   });
  // }

  return redirect("/admin/pricing");
};
