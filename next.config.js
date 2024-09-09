/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    basePath: "/next_ui_test",
    assetPrefix: "/public",
    images: {
        unoptimized: true,
    },
}

module.exports = nextConfig
