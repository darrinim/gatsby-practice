// GATSBY NODE CONFIG FILE, ALLOWS US TO TAP INTO NODE API'S THAT GATSBY EXPOSES. WILL USE TO DYNAMICALLY RENDER BLOG POSTS
// https://www.gatsbyjs.org/docs/node-apis/ above is the docs
// A node is just a data structure for storing data (look at node in our graphql query)
const path = require('path');

module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === 'MarkdownRemark') {

    const slug = path.basename(node.fileAbsolutePath, '.md')

    createNodeField({
      node,
      name: 'slug',
      value: slug
    })

  }
}

// below the graphql is a function, not what we normally used, it's a function that we pass a string graphql query to, it returns a promise

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogTemplate = path.resolve('./src/templates/blog.js')
  const res = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  res.data.allMarkdownRemark.edges.forEach((edge) => {
    createPage({
      component: blogTemplate,
      path: `/blog/${edge.node.fields.slug}`,
      context: {
        slug: edge.node.fields.slug
      }
    })
  })

  // need 3 things 
    // 1. Get path to template
    // 2. Get markdown data
    // 3. Create new pages
    // .resolve allows us to add everything prior to that to the root of computer
}

// exports.createPages = ({ graphql, actions }) => {
//   const { createPage } = actions
// export createPages function, gatsby gets access to function then runs it a single time
// destructure first argument to get access to graphql and actions
// graphql allows us to fetch data (markdown nodes)
// actions gives us access to action for creating new page
