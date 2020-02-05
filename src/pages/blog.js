/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Layout from '../components/layout';
import { Link, graphql, useStaticQuery } from 'gatsby';


const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)


  const postData = data.allMarkdownRemark.edges
  console.log('this right here bud', postData);

  return (
    <Layout>
      <h1>Blog</h1>
        <ol>
          {postData.map( (post) => {
            return (
              <li>
                <Link to={`blog/${post.node.fields.slug}`}>
                <h2>{post.node.frontmatter.title}</h2>
                <p>{post.node.frontmatter.date}</p>
                </Link>
              </li>
            )
          })}
        </ol>
      {console.log('what i am looking for', data.allMarkdownRemark.edges)
      }
    </Layout>
  );
};

export default BlogPage;