export default function robots() {
    return {
      rules: {
        userAgent: '*', 
        allow: '/',
        disallow: '/private/',
      },
      sitemap: 'https://www.d8labs.ai/sitemap.xml', 
    }
  }