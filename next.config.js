module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [`@svgr/webpack`],
    });

    return config;
  },
  images: {
    domains: ['www.avocatdorubotea.ro', 'iwebagency.ro', 'api.iwebagency.ro', '89.37.212.226'],
  },
};
