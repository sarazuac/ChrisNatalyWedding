import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Enables the placeholder SVG tiles in /public/gallery to render via next/image.
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
