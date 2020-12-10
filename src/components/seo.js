import React from "react"
import PropTypes from "prop-types"
import { graphql, useStaticQuery } from  'gatsby'
import { Helmet } from "react-helmet"

function SEO({ meta, pageContext }) {
  const data = useStaticQuery(graphql`
    query SEOQuery {
      wp {
        allSettings {
          generalSettingsDescription
          generalSettingsLanguage
          generalSettingsTitle
          generalSettingsUrl
        }
        seo {
          openGraph {
            defaultImage {
              altText
              sourceUrl
            }
          }
          schema {
            companyLogo {
              altText
              sourceUrl
            }
          }
          social {
            facebook {
              defaultImage {
                altText
                sourceUrl
              }
              url
            }
            instagram {
              url
            }
            linkedIn {
              url
            }
            twitter {
              cardType
              username
            }
            youTube {
              url
            }
          }
          webmaster {
            googleVerify
          }
        }
      }
    }
  `
  )

  const lang = data.wp.allSettings.generalSettingsLanguage;
  
  return (

    console.log(pageContext),

    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={pageContext.seo.title}
      // titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: pageContext.seo.metaDesc,
        },
        {
          property: `og:title`,
          content: pageContext.seo.opengraphTitle,
        },
        {
          property: `og:description`,
          content: pageContext.seo.metaDesc,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: pageContext.seo.opengraphPublisher,
        },
        {
          name: `twitter:title`,
          content: pageContext.seo.twitterTitle,
        },
        {
          name: `twitter:description`,
          content: pageContext.seo.twitterDescription,
        },
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  meta: [],
}

SEO.propTypes = {
  meta: PropTypes.arrayOf(PropTypes.object),
}

export default SEO
