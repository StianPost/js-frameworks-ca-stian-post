import { signIn, signOut, useSession } from 'next-auth/react';

import Head from 'next/head';
import Nav from '../components/Nav';
import React from 'react';
import Router from 'next/router';
import styles from '../styles/Home.module.css';

function Admin() {
  const { data: session } = useSession();
  if (session) {
    return (
      <div className={styles.container}>
        <Head>
          <title>People</title>
          <meta name='description' content='Generated by create next app' />
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <main>
          <div>
            <Nav />
          </div>
          Admin
        </main>
      </div>
    );
  } else {
    return (
      <div className={styles.container}>
        <Head>
          <title>People</title>
          <meta name='description' content='Generated by create next app' />
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <main>
          <div>
            <Nav />
          </div>
          <h1>THE FUCK YOU DOING HERE?!</h1>
          <h2>You ain't no damn admin</h2>
        </main>
      </div>
    );
  }
}

export default Admin;
