
module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [`@svgr/webpack`],
    });

    return config;
  },
  images: {
    domains: [
      '*',
      'www.avocatdorubotea.ro',
      'marweb.ro',
      'lh4.googleusercontent.com',
      'lh5.googleusercontent.com',
      'lh6.googleusercontent.com',
      'api.marweb.ro',
      'promo.seranking.com',
    ],
  },
  trailingSlash: true,
};
