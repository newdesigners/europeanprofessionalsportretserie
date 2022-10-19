/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = {
  images: {
    domains: ["cdn.sanity.io"],
  },
  i18n: {
    locales: ["nl-nl", "en-uk"],
    defaultLocale: "nl-nl",
  },
  nextConfig,
};
