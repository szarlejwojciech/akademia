/* eslint-disable no-undef */
module.exports = {
  pathPrefix: '/akademiaurody',
  siteMetadata: {
    lang: 'pl',
    title: 'Akademia urody',
    description:
      'Akademia Urody, to nie tylko ekskluzywny salon, to przede wszystkim miejsce, którego urok urzeknie Cię swym ciepłem.',
    author: 'Wojciech Szarlej',
    url: 'http://www.akademiaurody-nowytarg.pl',
    image: '/logo.jpg',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-layout',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: 'gatsby-plugin-prefetch-google-fonts',
      options: {
        fonts: [
          {
            family: 'Open Sans',
            variants: ['400', '600'],
          },
          {
            family: 'Lora',
            variants: ['500'],
          },
        ],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/assets/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /svg/,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-prettier-eslint',
      options: {
        onChangeFullScanFormat: false,
        onChangeFullScanLint: false,
        prettier: {
          patterns: [
            // the pattern "**/*.{js,jsx,ts,tsx}" is not used because we will rely on `eslint --fix`
            '**/*.{css,scss,less}',
            '**/*.{json,json5}',
            '**/*.{graphql}',
            '**/*.{md,mdx}',
            '**/*.{html}',
            '**/*.{yaml,yml}',
          ],
        },
        eslint: {
          patterns: '**/*.{js,jsx,ts,tsx}',
          customOptions: {
            fix: true,
            cache: true,
          },
        },
      },
    },
    // {
    // resolve: 'gatsby-plugin-manifest',
    // options: {
    // name: 'AkademiaUrody',
    // short_name: 'Akademia',
    // start_url: '/',
    // background_color: '#4F5053',
    // theme_color: '#1A171B',
    // display: 'minimal-ui',
    // icon: 'src/assets/images/favicon.png',
    // },
    // },
  ],
}
