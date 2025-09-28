/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["firebasestorage.googleapis.com"],
  },
  distDir: "dist",
  eslint: {
    ignoreDuringBuilds: false,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  webpack: (config, { isServer }) => {
    // undiciのプライベートフィールド構文エラーを解決
    config.module.rules.push({
      test: /\.m?js$/,
      type: "javascript/auto",
      resolve: {
        fullySpecified: false,
      },
    });

    // undiciモジュールを外部化（サーバーサイドのみ）
    if (isServer) {
      config.externals.push("undici");
    }

    return config;
  },
};

module.exports = nextConfig;
