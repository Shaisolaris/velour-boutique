/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/velour-boutique',
  assetPrefix: '/velour-boutique/',
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
  images: { unoptimized: true },
}
export default nextConfig
