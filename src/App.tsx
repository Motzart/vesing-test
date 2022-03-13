import React, { useContext, useEffect } from 'react';
import { appStore, onAppMount } from '~state/app';
import { NavBar } from '~components/navBar';
import {HelloBlock} from '~components/HelloBlock'
import { Content } from '~components/content';
import {ClaimTokensBlock} from '~components/ClaimTokensBlock';
import {TokenSale1} from '~components/TokenSale1';

function App() {
  const { dispatch } = useContext(appStore);

  const onMount = () => {
    dispatch(onAppMount());
  };

  useEffect(onMount, []);

  return (
    <>
      <NavBar/>
      <HelloBlock />
      <Content />
      <ClaimTokensBlock />
      <TokenSale1 />
    </>
  );
}

export default App;
