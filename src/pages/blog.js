/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Layout from '../components/layout';
import { Link, graphql, useStaticQuery } from 'gatsby';
import blogStyles from './blog.module.scss';
import Head from '../components/head';


const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost (
        sort: {
          fields:publishedDate,
          order: DESC
        }
      ){
        edges {
          node {
            title
            slug
            publishedDate(formatString:"MMMM Do, YYYY")
          }
        }
      }
    }
  `)


  const postData = data.allContentfulBlogPost.edges
  console.log('THIS IS THE ONE ', data.allContentfulBlogPost.edges);
 

  return (
    <Layout>
      <Head title="Blog" />
      <h1>Blog</h1>
        <ol className={blogStyles.posts}>
          {postData.map( (post) => {
            return (
              <li className={blogStyles.post}>
                <Link to={`blog/${post.node.slug}`}>
                <h2>{post.node.title}</h2>
                <p>{post.node.publishedDate}</p>
                </Link>
              </li>
            )
          })}
        </ol>
    </Layout>
  );
};

export default BlogPage;