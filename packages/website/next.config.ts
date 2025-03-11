import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  basePath: '/tai',
  assetPrefix: '/tai',
  images: {
    remotePatterns: [
      {
        protocol: 'https', // 指定协议
        hostname: 'image1.wokanhao.com', // 添加你的图片域名
        port: '', // 如果没有特定端口，留空
        pathname: '/**', // 允许该域名下的所有路径
      },
    ],
  },
  experimental: {
    serverActions: {
      bodySizeLimit: '5mb',
    },
  },
}

export default nextConfig
