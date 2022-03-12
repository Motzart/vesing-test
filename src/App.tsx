import React, { useContext, useEffect } from 'react';
import { appStore, onAppMount } from '~state/app';
import { NavBar } from '~components/navBar';
import { Content } from '~components/content';
import {ClaimTokensBlock} from '~components/ClaimTokensBlock';

function App() {
  const { dispatch } = useContext(appStore);

  const onMount = () => {
    dispatch(onAppMount());
  };

  useEffect(onMount, []);

  return (
    <>
      <NavBar/>
      <Content />
      <ClaimTokensBlock />
    </>
  );
}

export default App;
