/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Link } from 'gatsby';
import Footer from '../components/footer';
import Header from '../components/header';
import Layout from '../components/layout'

// GETTING GRAPHQL PLAYGROUND TO WORK. CHECK OUT PACKAGE.JSON UNDER DEVELOPMENT, THEN USE NPM RUN DEVELOP

const IndexPage = () => {
  return (
    <Layout>
      <h1>Hello.</h1>
      <h2>I'm Darrin, I am trying out Gatsby. Wish me luck!</h2>
      <p>Need a developer? 
        <Link to="/contact">Contact</Link>
      </p>
    </Layout>
  )
};

export default IndexPage;
