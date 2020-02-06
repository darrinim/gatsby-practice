/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import Head from '../components/head';

const AboutPage = () => {
  return (
    <div>
      <Layout>
        <Head title="About"/>     
        <h1>About Page</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi dolor vel unde quibusdam ipsum maxime dolorem incidunt repellat rerum ullam, similique, sed non, deleniti sequi repudiandae temporibus iusto voluptatem. Ipsum.</p>
        <p>Contact me <Link to="/contact">here</Link></p>
      </Layout>
    </div>
  );
};

export default AboutPage;
