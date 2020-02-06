/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import Head from '../components/head'

// GETTING GRAPHQL PLAYGROUND TO WORK. CHECK OUT PACKAGE.JSON UNDER DEVELOPMENT, THEN USE NPM RUN DEVELOP

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home" />
      <h1>Hello.</h1>
      <h2>I'm Darrin, I am trying out Gatsby. Wish me luck!</h2>
    </Layout>
  )
};

export default IndexPage;
