import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';
const repoName = 'port_polio';

const nextConfig: NextConfig = {
    output: 'export',
    distDir: 'docs',
    trailingSlash: true,
    images: {
        unoptimized: true
    },
    basePath: isProd ? `/${repoName}` : '',
    assetPrefix: isProd ? `/${repoName}` : '',
    experimental: {
        viewTransition: true
    },
    compiler: {
        styledComponents: true
    },
    generateBuildId: () => 'build',
    outputFileTracing: false,
    env: {
        BASE_PATH: isProd ? `/${repoName}/` : '/',
    },
    webpack: (config, { webpack }) => {
        return config;
    }
};

export default nextConfig;