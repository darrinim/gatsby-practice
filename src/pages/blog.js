/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Layout from '../components/layout';
import { graphql, useStaticQuery } from 'gatsby';


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
            html
            excerpt
          }
        }
      }
    }
  `)

  console.log(data);
  

  const postData = data.allMarkdownRemark.edges

  return (
    <Layout>
      <h1>Blog</h1>
        <ol>
          {postData.map( (post) => {
            return (
              <li>
                <h2>{post.node.frontmatter.title}</h2>
                <p>{post.node.frontmatter.date}</p>
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
