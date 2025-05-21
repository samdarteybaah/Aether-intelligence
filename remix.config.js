/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  ignoredRouteFiles: ["**/.*"],
  serverModuleFormat: "cjs",
  serverPlatform: "node",
  tailwind: false,
  postcss: false,
  watchPaths: ["./public"],
  server: "./app/server.ts",
  serverBuildPath: "./build/server/index.js",
  future: {
    v2_errorBoundary: true,
    v2_headers: true,
    v2_meta: true,
    v2_normalizeFormMethod: true,
    v2_routeConvention: true,
  },
  appDirectory: "app",
  assetsBuildDirectory: "public/build",
  publicPath: "/build/",
};
