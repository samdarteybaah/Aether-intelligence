import { createRequestHandler } from "@remix-run/express";
import { broadcastDevReady } from "@remix-run/node";
import express from "express";
import * as build from "@remix-run/dev/server-build";

const app = express();

// Add security headers
app.use((req, res, next) => {
  // Allow embedding from Shopify admin and store domains
  res.setHeader(
    "Content-Security-Policy",
    "default-src 'self' https://tec-havenn.myshopify.com https://admin.shopify.com https://localhost:*; " +
    "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://tec-havenn.myshopify.com https://admin.shopify.com https://localhost:*; " +
    "style-src 'self' 'unsafe-inline' https://tec-havenn.myshopify.com https://admin.shopify.com https://localhost:*; " +
    "frame-ancestors 'self' https://tec-havenn.myshopify.com https://admin.shopify.com https://localhost:*; " +
    "img-src 'self' data: https: http:; " +
    "font-src 'self' data: https: http:;"
  );

  // Allow embedding in iframes
  res.setHeader("X-Frame-Options", "ALLOWALL");
  
  // Other security headers
  res.setHeader("X-Content-Type-Options", "nosniff");
  res.setHeader("X-XSS-Protection", "1; mode=block");
  res.setHeader("Referrer-Policy", "same-origin");

  next();
});

// Handle CORS
app.use((_req, res, next) => {
  const allowedOrigins = ['https://tec-havenn.myshopify.com', 'https://localhost:57839'];
  const origin = _req.headers.origin;
  if (origin && allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.options("*", (_req, res) => {
  res.sendStatus(200);
});

app.all(
  "*",
  createRequestHandler({
    build,
    mode: process.env.NODE_ENV,
  })
);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
  if (process.env.NODE_ENV === "development") {
    broadcastDevReady(build);
  }
});
