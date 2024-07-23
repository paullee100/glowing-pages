/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: "cdn.myanimelist.net"
            },
            {
                protocol: 'https',
                hostname: "drive.google.com"
            }
        ]
    }
};

export default nextConfig;
