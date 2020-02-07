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
      <h2>I'm Darrin, this was me trying a static site generator and integrating it with a CMS. The static site generator I used was Gatsby, and the CMS I use was Contentful. I highly suggest both!</h2>
    </Layout>
  )
};

export default IndexPage;
