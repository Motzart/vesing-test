import React, { useContext } from 'react';
import { NoConnected } from "./NoConnected";
import { Connected } from "./Connectes";
import { appStore } from '~state/app';

export const ClaimTokensBlock = () => {
  const { state } = useContext(appStore);

  const { wallet } = state;
  const signedIn = wallet && wallet.signedIn;

  return signedIn ? <Connected /> : <NoConnected />
};
