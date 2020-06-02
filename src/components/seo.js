/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { useLocation } from '@reach/router'
import { useStaticQuery, graphql } from 'gatsby'

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        defaultDescription: description
        siteUrl: url
        defaultImage: image
        defaultLang: lang
        defaultKeywords: keywords
      }
    }
  }
`

function SEO({ description, lang, title, image, article, keywords }) {
  const { pathname } = useLocation()
  const { site } = useStaticQuery(query)

  const {
    defaultTitle,
    defaultDescription,
    siteUrl,
    defaultImage,
    defaultLang,
    defaultKeywords,
  } = site.siteMetadata

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    url: `${siteUrl}${pathname}`,
    image: `${siteUrl}${image || defaultImage}`,
    lang: lang || defaultLang,
    keywords: keywords || defaultKeywords,
  }

  return (
    <Helmet title={seo.title} htmlAttributes={{ lang: seo.lang }}>
      <meta charSet="utf-8" />
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta property="og:locale" content="pl_PL" />
      <meta property="og:site_name" content="AkademiaUrody-NowyTarg"></meta>
      {seo.url && <meta property="og:url" content={seo.url} />}
      {(article ? true : null) && <meta property="og:type" content="article" />}
      {seo.title && <meta property="og:title" content={seo.title} />}
      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}
      {seo.image && <meta property="og:image" content={seo.image} />}
      {seo.keywords && <meta name="Keywords" content={seo.keywords} />}
    </Helmet>
  )
}

SEO.defaultProps = {
  lang: 'en',
  meta: [],
  title: null,
  description: null,
  keywords: null,
  image: null,
  article: false,
}

SEO.propTypes = {
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
  keywords: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  article: PropTypes.bool,
}

export default SEO
