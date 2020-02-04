/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Footer from '../components/footer';
import Header from '../components/header';

const ContactPage = () => {
  return (
    <div>
      <Header />
      <h1>Contact</h1>
      <ul>
        <li>Cell: 234-999-8765</li>
        <li>Email: testemail@email.com</li>
      </ul>
      <Footer />
    </div>
  );
};

export default ContactPage;