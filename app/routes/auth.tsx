import { json, redirect } from "@remix-run/node";
import type { LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import shopify from "../shopify.server";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const url = new URL(request.url);
  
  try {
    if (url.pathname === "/auth/callback") {
      await shopify.authenticate.admin(request);
      return redirect("/app");
    } else if (url.pathname === "/auth/session-token") {
      await shopify.authenticate.admin(request);
      return json({ status: "authenticated" });
    }
    return redirect("/auth/login");
  } catch (error) {
    console.error("Auth error:", error);
    return redirect("/auth/login");
  }
};

export default function Auth() {
  return null;
}
