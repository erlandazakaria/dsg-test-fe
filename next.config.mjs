/** @type {import('next').NextConfig} */
const nextConfig = {
    publicRuntimeConfig: {
        // Will be available on both server and client
        backendUrl: "localhost:8080",
    },
};

export default nextConfig;
