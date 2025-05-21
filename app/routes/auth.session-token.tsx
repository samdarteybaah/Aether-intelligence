import { redirect } from "@remix-run/node";
import type { LoaderFunctionArgs } from "@remix-run/node";
import shopify from "../shopify.server";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  try {
    const { admin } = await shopify.authenticate.admin(request);
    return admin.rest.resources;
  } catch (error) {
    console.error("Session token error:", error);
    return redirect("/auth/login");
  }
};

export default function SessionToken() {
  return null;
}
