import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/projetos',
        destination: '/projects',
      },
    ]
  },
  // outros configs...
}

export default nextConfig
