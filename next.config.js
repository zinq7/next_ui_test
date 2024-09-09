/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    assetPrefix: "/",
    basePath: "/next_ui_test",
    images: {
        unoptimized: true,
    },
}

module.exports = nextConfig
