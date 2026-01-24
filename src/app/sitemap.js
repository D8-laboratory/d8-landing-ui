export default function sitemap() {
    const baseUrl = 'https://www.d8labs.ai';
    const locales = ['es', 'en', 'fr'];
    const pages = ['', '/product'];
  
    return locales.flatMap((locale) =>
    pages.map((page) => ({
      url: `${baseUrl}/${locale}${page}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: page === '' ? 1 : 0.8,
    }))
  );
}
