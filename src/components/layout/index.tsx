// library
import React from 'react';
// components
import Header from '../header';
import Footer from '../footer';
// static
import styles from "~assets/styles/components/layout/layout.module.scss";

interface Ichildren {
  readonly children: Object
}

function Layout({ children }: Ichildren) {

  return (
    <div className={styles.wrapper}>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Layout;
