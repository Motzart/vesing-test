import React, { HTMLAttributes, useContext } from "react";
// utils
import { appStore } from "~state/app";
// static
import imgWallet from "../../assets/images/wallet.svg";
import imgNear from "../../assets/images/near.svg";
import styles from "../../assets/styles/components/connectWallet/connectWallet.module.scss";

const ConnectWallet = (props: HTMLAttributes<HTMLButtonElement> & { disabled?: boolean }) => {
  const { disabled } = props;
  const { state } = useContext(appStore);
  const { wallet, account } = state;
  const signedIn = wallet && wallet.signedIn;

  return (
    <>
      <button
        disabled={disabled}
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
