const config = {
  gatsby: {
    pathPrefix: '/',
    siteUrl: 'https://answerrocket.com',
    gaTrackingId: null,
    trailingSlash: false,
  },
  header: {
    logo: 'https://www.answerrocket.com/wp-content/uploads/2020/01/AR_logo_horizontal_WHITE.png',
    logoLink: 'https://answerrocket.com/',
    title:
    "<a href='https://www.answerrocket.com/'></a>",
    githubUrl: 'https://github.com/alyssadurante/Galaxy',
    helpUrl: '',
    tweetText: '',
    links: [{ text: '', link: '' }],
    search: {
      enabled: false,
      indexName: '',
      algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
      algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
      algoliaAdminKey: process.env.ALGOLIA_ADMIN_KEY,
    },
  },
  sidebar: {
    forcedNavOrder: [
      '/introduction', // add trailing slash if enabled above
      '/atoms',
      '/molecules',
      '/organisms'
    ],
    collapsedNav: [
      '/atoms', // add trailing slash if enabled above
      '/molecules',
      '/organisms'
    ],
    links: [{ text: 'AnswerRocket', link: 'https://answerrocket.com' }],
    frontline: true,
    ignoreIndex: true,
    title:
      "Components",
  },
  siteMetadata: {
    title: 'Galaxy Design System | AnswerRocket',
    description: 'Documentation built with mdx. Powering hasura.io/learn ',
    ogImage: null,
    docsLocation: 'https://github.com/hasura/gatsby-gitbook-boilerplate/tree/master/content',
    favicon: 'https://www.answerrocket.com/wp-content/uploads/2021/11/cropped-ar-favicon-2021-32x32.png',
  },
  pwa: {
    enabled: false, // disabling this will also remove the existing service worker.
    manifest: {
      name: 'Galaxy Design System',
      short_name: 'GDS',
      start_url: '/',
      background_color: '#6b37bf',
      theme_color: '#6b37bf',
      display: 'standalone',
      crossOrigin: 'use-credentials',
      icons: [
        {
          src: 'src/pwa-512.png',
          sizes: `512x512`,
          type: `image/png`,
        },
      ],
    },
  },
};

module.exports = config;