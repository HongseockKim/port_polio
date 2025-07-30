import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output:'export',
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
    generateBuildId: () => 'build'
};

export default nextConfig;
