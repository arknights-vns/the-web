import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    reactStrictMode: true,
    env: {
        VNS_TICKET_FORM_LINK: process.env.VNS_TICKET_FORM_LINK,
    },
};

export default nextConfig;
