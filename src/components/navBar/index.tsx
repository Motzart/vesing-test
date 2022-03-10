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
        <a className="navbar-brand" href="#">Vesting App</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse"
                aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav me-auto mb-2 mb-md-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">{account && account.accountId}</a>
            </li>
          </ul>
          <div className="d-flex">
            {
              signedIn ? (
                <div className="d-flex text-info align-items-center">
                  <p className="m-0 px-3">Balance: {wallet.balance}</p>
                  <button className="btn btn-outline-success" type="submit" onClick={() => wallet.signOut()} >Sign Out</button>
                </div>
              ) : (
                <button className="btn btn-outline-success" type="submit" onClick={() => wallet.signIn()} >Connect Near Wallet</button>
              )
            }
          </div>
        </div>
      </div>
    </nav>
  );
};
