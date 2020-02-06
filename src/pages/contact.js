/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Layout from '../components/layout';
import Head from '../components/head';

const ContactPage = () => {
  return (
    <div>
      <Layout>
        <Head title="Contact" />
        <h1>Contact</h1>
        <ul>
          <li>Cell: 234-999-8765</li>
          <li>Email: testemail@email.com</li>
        </ul>
      </Layout>
    </div>
  );
};

export default ContactPage;