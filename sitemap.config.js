/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://marweb.ro',
  generateRobotsTxt: true,
  sitemapSize: 5000,
  exclude: ['/termeni-conditii', '/politica-cookie', '/admin/*', '/admin'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        disallow: '/',
        disallow: '/politica-cookie',
        disallow: '/termeni-conditii',
        disallow: '/admin/*',
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
        disallow: '/politica-cookie',
        disallow: '/termeni-conditii',
        disallow: '/admin/*',
      },
      {
        userAgent: 'AdsBot-Google',
        allow: ['/'],
        disallow: '/politica-cookie',
        disallow: '/termeni-conditii',
        disallow: '/admin/*',
      },
      {
        userAgent: 'Mediapartners-Google',
        allow: ['/'],
        disallow: '/termeni-conditii',
        disallow: '/admin/*',
      },
      {
        userAgent: 'Googlebot-Image',
        allow: ['/'],
        disallow: '/politica-cookie',
        disallow: '/termeni-conditii',
        disallow: '/admin/*',
      },
      {
        userAgent: 'Googlebot-Video',
        allow: ['/'],
        disallow: '/politica-cookie',
        disallow: '/termeni-conditii',
        disallow: '/admin/*',
      },
      {
        userAgent: 'Googlebot',
        allow: ['/'],
        disallow: '/politica-cookie',
        disallow: '/termeni-conditii',
        disallow: '/admin/*',
      },
      {
        userAgent: 'Google-Read-Aloud',
        allow: ['/'],
        disallow: '/politica-cookie',
        disallow: '/termeni-conditii',
        disallow: '/admin/*',
      },
      {
        userAgent: 'Google-Site-Verification',
        allow: ['/'],
        disallow: '/politica-cookie',
        disallow: '/termeni-conditii',
        disallow: '/admin/*',
      },
      {
        userAgent: 'Bingbot',
        allow: ['/'],
        disallow: '/politica-cookie',
        disallow: '/termeni-conditii',
        disallow: '/admin/*',
      },
      {
        userAgent: 'Slurp',
        allow: ['/'],
        disallow: '/politica-cookie',
        disallow: '/termeni-conditii',
        disallow: '/admin/*',
      },
      {
        userAgent: 'DuckDuckBot',
        allow: ['/'],
        disallow: '/politica-cookie',
        disallow: '/termeni-conditii',
        disallow: '/admin/*',
      },
      {
        userAgent: 'facebot',
        allow: ['/'],
        disallow: '/politica-cookie',
        disallow: '/termeni-conditii',
        disallow: '/admin/*',
      },
      {
        userAgent: 'Applebot',
        allow: ['/'],
        disallow: '/politica-cookie',
        disallow: '/termeni-conditii',
        disallow: '/admin/*',
      },
    ],
  },
};

