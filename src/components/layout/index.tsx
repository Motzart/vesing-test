// library
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
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
    <Router>
      <div className={styles.wrapper}>
        <Header />
        {children}
        <Footer />
      </div>
    </Router>
  )
}

export default Layout;
