/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

// export const constructUrl = (baseUrl, path) =>
//   (!baseUrl || !path) ? null : `${baseUrl}${path}`;

const Seo = ({ description, title, children, image }: {
    description: string,
    title: string,
    children?: React.ReactElement,
    image: string,
}) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            social {
              twitter
            }
            siteUrl
          }
        }
      }
    `
  )
  const metaDescription = description || site.siteMetadata.description
  const imageUrl = `${site.siteMetadata?.siteUrl}${image}`
    // fix for strange double prefix bug in prod builds
    .replace("/blog/blog/", "/blog/");
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={metaDescription} />
      {image && <>
        <meta name="image" content={imageUrl} />
        <meta name="twitter:image" content={imageUrl} />
        <meta name="og:image" content={imageUrl} />
      </>}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:creator"
        content={site.siteMetadata?.social?.twitter || ``}
      />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />
      {children}
    </>
  )
}

Seo.defaultProps = {
  description: ``,
}

Seo.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string.isRequired,
}

export default Seo
