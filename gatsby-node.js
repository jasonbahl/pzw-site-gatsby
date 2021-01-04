const _ = require(`lodash`)
const Promise = require(`bluebird`)
const path = require(`path`)
const slash = require(`slash`)
 
// Implement the Gatsby API “createPages”. This is
// called after the Gatsby bootstrap is finished so you have
// access to any information necessary to programmatically
// create pages.
// Will create pages for WordPress pages (route : /{slug})
// Will create pages for WordPress posts (route : /news/{slug})
exports.createPages = ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions
  createRedirect({ fromPath: '/', toPath: '/home', redirectInBrowser: true, isPermanent: true })
  return new Promise((resolve, reject) => {
    // The “graphql” function allows us to run arbitrary
    // queries against the local WordPress graphql schema. Think of
    // it like the site has a built-in database constructed
    // from the fetched data that you can run queries against.
 
    // ==== PAGES (WORDPRESS NATIVE) ====
    graphql(
      `
        {
          allWpPage {
            edges {
              node {
                acfFlexibleContent {
                  fieldGroupName
                  flexibleContent {
                    __typename
                    ... on WpPage_Acfflexiblecontent_FlexibleContent_Hero {
                      fieldGroupName
                      heroText
                    }
                    ... on WpPage_Acfflexiblecontent_FlexibleContent_Promos {
                      fieldGroupName
                      promo {
                        ... on WpPage_Acfflexiblecontent_FlexibleContent_Promos_Promo_PromoCard {
                          fieldGroupName
                          promotext
                        }
                      }
                    }
                  }
                }
                content
                id
                seo {
                  metaDesc
                  metaKeywords
                  metaRobotsNofollow
                  metaRobotsNoindex
                  opengraphAuthor
                  opengraphDescription
                  opengraphImage {
                    altText
                    sourceUrl
                  }
                  opengraphModifiedTime
                  opengraphPublishedTime
                  opengraphPublisher
                  opengraphSiteName
                  opengraphTitle
                  opengraphType
                  opengraphUrl
                  schema {
                    articleType
                    pageType
                    raw
                  }
                  title
                  twitterDescription
                  twitterImage {
                    altText
                    sourceUrl
                  }
                  twitterTitle
                }
                slug
                template {
                  templateName
                }
                title
              }
            }
          }
        }
      `
    )
      .then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }
 
        // Create Page pages.
        // const pageTemplate = path.resolve("./src/templates/page.js")
        // We want to create a detailed page for each
        // page node. We'll just use the WordPress Slug for the slug.
        // The Page ID is prefixed with 'PAGE_'
        _.each(result.data.allWpPage.edges, edge => {
          // Gatsby uses Redux to manage its internal state.
          // Plugins and sites can use functions like "createPage"
          // to interact with Gatsby.
          const pageTemplate = path.resolve(`./src/templates/${edge.node.template.templateName}.js`)
          createPage({
            // Each page is required to have a `path` as well
            // as a template component. The `context` is
            // optional but is often necessary so the template
            // can query data specific to each page.
            path: `/${edge.node.slug}/`,
            component: slash(pageTemplate),
            // component: slash(edge.node.template.templateName === 'Home' ? pageTemplateHome : pageTemplate),
            context: edge.node
          })
        })
      })
      // ==== END PAGES ====
 
      // ==== POSTS (WORDPRESS NATIVE AND ACF) ====
      .then(() => {
        graphql(
          `
            {
              wpMenuItem(url: {eq: "/news"}) {
                label
              }
              wpPage(slug: {eq: "news-seo"}) {
                id
                seo {
                  canonical
                  metaDesc
                  metaKeywords
                  metaRobotsNofollow
                  metaRobotsNoindex
                  opengraphAuthor
                  opengraphDescription
                  opengraphImage {
                    altText
                    sourceUrl
                  }
                  opengraphModifiedTime
                  opengraphPublishedTime
                  opengraphPublisher
                  opengraphSiteName
                  opengraphTitle
                  opengraphType
                  opengraphUrl
                  schema {
                    articleType
                    pageType
                  }
                  title
                  twitterDescription
                  twitterImage {
                    altText
                    sourceUrl
                  }
                  twitterTitle
                }
              }
              allWpPost {
                edges {
                  node {
                    content
                    date(formatString: "Do MMM YYYY")
                    excerpt
                    featuredImage {
                      node {
                        id
                        sourceUrl
                      }
                    }
                    id
                    slug
                    title
                  }
                }
              }
            }
          `
        ).then(result => {
          if (result.errors) {
            console.log(result.errors)
            reject(result.errors)
          }

          const newsMenuItem = result.data.wpMenuItem;
          const newsSEO = result.data.wpPage.seo;
          const posts = result.data.allWpPost.edges;
          const postsPerPage = 2;
          const numberOfPages = Math.ceil(posts.length / postsPerPage);
          const postListTemplate = path.resolve('./src/templates/postList.js');

          Array.from({length: numberOfPages}).forEach((page, index) => {
            createPage({
              component: slash(postListTemplate),
              path: index === 0 ? '/news' : `/news/${index + 1}`,
              context: {
                newsMenuItem,
                newsSEO,
                posts: posts.slice(index * postsPerPage, (index * postsPerPage) + postsPerPage),
                numberOfPages,
                currentPage: index + 1
              },
            })
          })

          const pageTemplate = path.resolve("./src/templates/page.js")

          _.each(posts, (post) => {
            createPage({
              path: `/news/${post.node.slug}`,
              component: slash(pageTemplate),
              context: post.node
            })
          })

          // const postTemplate = path.resolve("./src/templates/post.js")
          // // We want to create a detailed page for each
          // // post node. We'll just use the WordPress Slug for the slug.
          // // The Post ID is prefixed with 'POST_'
          // _.each(result.data.allWpPost.edges, edge => {
          //   createPage({
          //     path: `/news/${edge.node.slug}/`,
          //     component: slash(postTemplate),
          //     context: edge.node,
          //   })
          // })
          resolve()
        })
      })
    // ==== END POSTS ====
  })
}
