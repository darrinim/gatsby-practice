/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Link } from 'gatsby';

const IndexPage = () => {
  return (
    <div>
      <h1>Hello.</h1>
      <h2>I'm Darrin, I am trying out Gatsby. Wish me luck!</h2>
      <p>Need a developer? 
        <Link to="/contact">Contact</Link>
      </p>
    </div>
  );
};

export default IndexPage;
