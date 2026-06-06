/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { dev }) => {
    // Windows: Next's on-disk webpack cache intermittently fails to rename its
    // `*.pack.gz` files on recompile (ENOENT), which drops chunks and blanks the
    // page. Use the in-memory cache in dev to avoid the corruption entirely.
    if (dev) {
      config.cache = { type: "memory" };
    }
    return config;
  },
};

export default nextConfig;
