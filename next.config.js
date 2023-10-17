/** @type {import('next').NextConfig} */

const { version } = import('./package.json', {
  assert: { type: 'json' }
})

const nextConfig = {
  reactStrictMode: false,
  publicRuntimeConfig: {
    version
  }
}

module.exports = nextConfig
