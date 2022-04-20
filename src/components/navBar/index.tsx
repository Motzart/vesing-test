import * as React from 'react';
import { useContext } from 'react';
import { appStore } from '~state/app';

export const NavBar = () => {
  const { state } = useContext(appStore);

  const { wallet, account } = state;
  const signedIn = wallet && wallet.signedIn;

  return (
    <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">Lockups Data</a>
      </div>
    </nav>
  );
};
