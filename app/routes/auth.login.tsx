import { redirect } from "@remix-run/node";
import type { LoaderFunctionArgs } from "@remix-run/node";
import shopify from "../shopify.server";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  try {
    // Check if already authenticated
    try {
      await shopify.authenticate.admin(request);
      return redirect("/app");
    } catch {
      // Not authenticated, proceed with login
      return await shopify.login(request);
    }
  } catch (error) {
    console.error("Login error:", error);
    throw error;
  }
};

export default function Login() {
  return null;
}
