module.exports = {
  plugins: [
    {
      resolve: 'gatsby-theme-portfolio-minimal',
      options: {
        siteUrl: 'https://alex-ho-portfolio.vercel.app/', // Used for sitemap generation
        manifestSettings: {
          favicon: './content/images/my-octocat.png',
          siteName: 'My Minimal Portfolio', // Used in manifest.json
          shortName: 'Portfolio', // Used in manifest.json
          startUrl: '/', // Used in manifest.json
          backgroundColor: '#FFFFFF', // Used in manifest.json
          themeColor: '#000000', // Used in manifest.json
          display: 'minimal-ui', // Used in manifest.json
        },
        contentDirectory: './content',
        blogSettings: {
          path: '/blog', // Defines the slug for the blog listing page
          usePathPrefixForArticles: true, // Default true (i.e. path will be /blog/first-article)
        },
        // You can define theme-specific plugins here if needed
      },
    },
  ],
};
