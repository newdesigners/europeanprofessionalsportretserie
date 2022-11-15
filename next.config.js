/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
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
};
