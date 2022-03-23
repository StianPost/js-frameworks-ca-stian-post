import Head from 'next/head';
import Nav from '../components/Nav';
import React from 'react';
import styles from '../styles/Home.module.css';

function Login() {
  return (
    <>
      <Head>
        <title>People</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div>
        <Nav />
      </div>
      Login
    </>
  );
}

export default Login;