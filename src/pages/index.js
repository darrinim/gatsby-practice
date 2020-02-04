/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Link } from 'gatsby';
import Footer from '../components/footer';
import Header from '../components/header';

const IndexPage = () => {
  return (
    <div>
      <Header />
      <h1>Hello.</h1>
      <h2>I'm Darrin, I am trying out Gatsby. Wish me luck!</h2>
      <p>Need a developer? 
        <Link to="/contact">Contact</Link>
      </p>
      <Footer />
    </div>
  );
};

export default IndexPage;
