module.exports = {
  pathPrefix: '/akademiaurody',
  siteMetadata: {
    lang: 'pl',
    title: `Akademia urody`,
    description: `Akademia Urody, to nie tylko ekskluzywny salon, to przede wszystkim miejsce, którego urok urzeknie Cię swym ciepłem.`,
    author: `Wojciech Szarlej`,
    url: `akademiaurody-nowytarg.pl`,
    image: `/logo.jpg`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-layout`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Open Sans`,
            variants: [`400`, `600`],
          },
          {
            family: `Lora`,
            variants: [`500`],
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /svg/, // See below to configure properly
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `AkademiaUrody`,
        short_name: `Akademia`,
        start_url: `/`,
        background_color: `#4F5053`,
        theme_color: `#1A171B`,
        display: `minimal-ui`,
        icon: `src/assets/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
