/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://iwebagency.ro',
  generateRobotsTxt: true,
  sitemapSize: 5000,
  exclude: ['/termeni-si-conditii', '/admin/*', '/admin'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        disallow: '/',
        disallow: '/termeni-si-conditii',
        disallow: '/admin/*',
      },
      {
        userAgent: 'google-bot',
        allow: ['/path', '/path-2'],
      },
      {
        userAgent: 'DotBot',
        disallow: ['/', '/*'],
      },
      {
        userAgent: 'AhrefsBot',
        disallow: ['/', '/*'],
      },
      {
        userAgent: 'PetalBot',
        disallow: ['/', '/*'],
      },
      {
        userAgent: 'SEMrushBot',
        disallow: ['/', '/*'],
      },
      {
        userAgent: 'Majestic',
        disallow: ['/', '/*'],
      },

      {
        userAgent: 'AdsBot-Google-Mobile',
        allow: ['/'],
        disallow: '/termeni-si-conditii',
        disallow: '/admin/*',
      },
      {
        userAgent: 'AdsBot-Google',
        allow: ['/'],
        disallow: '/termeni-si-conditii',
        disallow: '/admin/*',
      },
      {
        userAgent: 'Mediapartners-Google',
        allow: ['/'],
        disallow: '/termeni-si-conditii',
        disallow: '/admin/*',
      },
      {
        userAgent: 'Googlebot-Image',
        allow: ['/'],
        disallow: '/termeni-si-conditii',
        disallow: '/admin/*',
      },
      {
        userAgent: 'Googlebot-Video',
        allow: ['/'],
        disallow: '/termeni-si-conditii',
        disallow: '/admin/*',
      },
      {
        userAgent: 'Googlebot',
        allow: ['/'],
        disallow: '/termeni-si-conditii',
        disallow: '/admin/*',
      },
      {
        userAgent: 'Google-Read-Aloud',
        allow: ['/'],
        disallow: '/termeni-si-conditii',
        disallow: '/admin/*',
      },
      {
        userAgent: 'Google-Site-Verification',
        allow: ['/'],
        disallow: '/termeni-si-conditii',
        disallow: '/admin/*',
      },
      {
        userAgent: 'Bingbot',
        allow: ['/'],
        disallow: '/termeni-si-conditii',
        disallow: '/admin/*',
      },
      {
        userAgent: 'Slurp',
        allow: ['/'],
        disallow: '/termeni-si-conditii',
        disallow: '/admin/*',
      },
      {
        userAgent: 'DuckDuckBot',
        allow: ['/'],
        disallow: '/termeni-si-conditii',
        disallow: '/admin/*',
      },
      {
        userAgent: 'facebot',
        allow: ['/'],
        disallow: '/termeni-si-conditii',
        disallow: '/admin/*',
      },
      {
        userAgent: 'Applebot',
        allow: ['/'],
        disallow: '/termeni-si-conditii',
        disallow: '/admin/*',
      },
    ],
  },
};

