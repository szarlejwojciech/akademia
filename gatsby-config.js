/* eslint-disable no-undef */
module.exports = {
  pathPrefix: '/akademiaurody',
  siteMetadata: {
    lang: 'pl',
    title: 'Akademia urody, salon kosmetyczny Nowy Targ, ul. Kolejowa 2',
    description:
      'Akademia Urody, to nie tylko ekskluzywny salon, to przede wszystkim miejsce, którego urok urzeknie Cię swym ciepłem.',
    author: 'Wojciech Szarlej',
    url: 'http://www.akademiaurody-nowytarg.pl',
    keywords:
      'salon kosmetyczny,menard, emberill, pedix, reviderm, allesandro, beuty, piękno, uroda, zabiegi kosmetyczne, manicure, pedicure',
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
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'gallery',
        path: `${__dirname}/src/assets/gallery`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'productsImages',
        path: `${__dirname}/src/assets/productsImages`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'products',
        path: `${__dirname}/src/data/products`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'treatments',
        path: `${__dirname}/src/data/treatments`,
      },
    },
    {
      resolve: 'gatsby-plugin-prefetch-google-fonts',
      options: {
        fonts: [
          {
            family: 'Open Sans',
            variants: ['400', '400i', '600'],
            subsets: ['latin-ext'],
          },
          {
            family: 'Lora',
            variants: ['500'],
            subsets: ['latin-ext'],
          },
        ],
      },
    },
    'gatsby-plugin-mdx',
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
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'AkademiaUrody',
        short_name: 'Akademia',
        start_url: '/',
        background_color: '#4F5053',
        theme_color: '#1A171B',
        display: 'minimal-ui',
        icon: 'src/assets/images/favicon.png',
      },
    },
  ],
}
