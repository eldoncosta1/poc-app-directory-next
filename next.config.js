/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true,
  },
  transpilePackages: ["@lets-code-br/design-system-web"],
};

module.exports = nextConfig;
