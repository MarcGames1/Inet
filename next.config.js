module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [`@svgr/webpack`],
    });

    return config;
  },
  images: {
    domains: ['www.avocatdorubotea.ro', '89.37.212.226:8000/'],
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '89.37.212.226',
        port: '8000',
        pathname: '/**',
      },
    ],
  },
};
