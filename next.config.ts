import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output:'export',
    distDir: 'docs',
    trailingSlash:true,
    images:{
      unoptimized:true
    },
    experimental: {
        viewTransition: true
    },
    compiler:{
      styledComponents:true
    },
    generateBuildId: () => 'build',
    outputFileTracing: false
};

export default nextConfig;
