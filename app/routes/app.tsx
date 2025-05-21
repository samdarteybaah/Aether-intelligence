import { redirect } from "@remix-run/node";
import type { HeadersFunction, LoaderFunctionArgs } from "@remix-run/node";
import { Link, Outlet, useLoaderData, useRouteError } from "@remix-run/react";
import { boundary } from "@shopify/shopify-app-remix/server";
import { AppProvider } from "@shopify/shopify-app-remix/react";
import polarisStyles from "@shopify/polaris/build/esm/styles.css?url";

import { authenticate } from "../shopify.server";

export const links = () => [{ rel: "stylesheet", href: polarisStyles }];

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const url = new URL(request.url);
  const isEmbedded = url.searchParams.get("embedded") === "1";

  try {
    const session = await authenticate.admin(request);
    return { apiKey: process.env.SHOPIFY_API_KEY || "", session, isEmbedded };
  } catch (error) {
    console.error("Authentication error:", error);
    return redirect(`/auth/login${isEmbedded ? "?embedded=1" : ""}`);
  }
};

export default function App() {
  const data = useLoaderData<typeof loader>();
  const apiKey = data?.apiKey || "";
  const isEmbedded = data?.isEmbedded || false;

  return (
    <AppProvider isEmbeddedApp apiKey={apiKey}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '2rem'
      }}>
        <h1 style={{
          color: '#1A1A57',
          fontSize: '2.5rem',
          marginBottom: '1rem',
          fontWeight: 'bold'
        }}>
          Aether Intelligence
        </h1>
        <p style={{
          color: '#666666',
          fontSize: '1.2rem',
          marginBottom: '3rem',
          fontStyle: 'italic'
        }}>
          with Aether the sky is your starting point
        </p>
        <div style={{
          display: 'flex',
          gap: '2rem',
          justifyContent: 'center'
        }}>
          <Link to="/app/metrics" style={{
            textDecoration: 'none',
            color: '#1A1A57',
            fontSize: '1.1rem',
            padding: '0.8rem 1.5rem',
            borderRadius: '8px',
            backgroundColor: '#f0f0f7',
            border: '2px solid #1A1A57',
            transition: 'all 0.2s ease-in-out'
          }}>Metrics</Link>
          <Link to="/app/pricing" style={{
            textDecoration: 'none',
            color: '#1A1A57',
            fontSize: '1.1rem',
            padding: '0.8rem 1.5rem',
            borderRadius: '8px',
            backgroundColor: '#f0f0f7',
            border: '2px solid #1A1A57',
            transition: 'all 0.2s ease-in-out'
          }}>Dynamic Pricing</Link>
          <Link to="/app/bundle_suggestion" style={{
            textDecoration: 'none',
            color: '#1A1A57',
            fontSize: '1.1rem',
            padding: '0.8rem 1.5rem',
            borderRadius: '8px',
            backgroundColor: '#f0f0f7',
            border: '2px solid #1A1A57',
            transition: 'all 0.2s ease-in-out'
          }}>Bundle Suggestions</Link>
        </div>
      </div>
      <Outlet />
    </AppProvider>
  );
}

export function ErrorBoundary() {
  return boundary.error(useRouteError());
}

export const headers: HeadersFunction = (headersArgs) => {
  return boundary.headers(headersArgs);
};
