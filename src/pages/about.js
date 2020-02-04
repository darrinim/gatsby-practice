/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Link } from 'gatsby';
import Footer from '../components/footer';
import Header from '../components/header';

const AboutPage = () => {
  return (
    <div>
      <Header />
      <h1>About Page</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi dolor vel unde quibusdam ipsum maxime dolorem incidunt repellat rerum ullam, similique, sed non, deleniti sequi repudiandae temporibus iusto voluptatem. Ipsum.</p>
      <p>Contact me <Link to="/contact">here</Link></p>
      <Footer />
    </div>
  );
};

export default AboutPage;
