// library
import React, { useContext } from "react";
// utils
import { appStore } from "~state/app";
// static
import imgWallet from "../../assets/images/wallet.svg";
import imgNear from "../../assets/images/near.svg";
import styles from "../../assets/styles/components/connectWallet/connectWallet.module.scss";

const ConnectWallet = () => {
  const { state } = useContext(appStore);
  const { wallet, account } = state;
  const signedIn = wallet && wallet.signedIn;

  return (
    <>

      {/* {signedIn ? (
        <div className="d-flex text-info align-items-center">
          <p className="m-0 px-3">Balance: {wallet.balance}</p>
          <button
            className="btn btn-outline-success"
            type="submit"
            onClick={() => wallet.signOut()}
          >
            Sign Out
          </button>
        </div>
      ) : (
        <button
          type="submit"
          onClick={() => wallet.signIn()}
          className={styles.button_connect}
        >
          Connect wallet
        </button>
      )} */}

      {/* <a className="nav-link active" aria-current="page" href="#">
        {account && account.accountId}
      </a> */}
      <button
        type="submit"
        onClick={() => wallet.signIn()}
        className={styles.button_connect}
      >
        <img src={signedIn ? imgNear : imgWallet} alt="Wallet icon" />
        <span>{signedIn ? (account && account.accountId) : 'Connect wallet'}</span>
      </button>
    </>

  );
};

export default ConnectWallet;
