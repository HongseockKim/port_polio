import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output:'export',
    distDir: 'docs',
    trailingSlash:true,
    images:{
      unoptimized:true
    },
    basePath: '/port_polio',
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
