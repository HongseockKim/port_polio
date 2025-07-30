import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output:'export',
    distDir: 'docs',
    basePath: '/portfolio',
    assetPrefix:'/portfolio/',
    swcMinify: true,
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
