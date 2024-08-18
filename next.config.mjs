/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'localhost',
                port: '4567',
                pathname: '/**',
            },
        ],
    },
};

export default nextConfig;
