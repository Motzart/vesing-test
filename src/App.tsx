import React, { useContext, useEffect } from 'react';
import { appStore, onAppMount } from '~state/app';
import { NavBar } from '~components/navBar';
import {HelloBlock} from '~components/HelloBlock'
import { Content } from '~components/content';
import {ClaimTokensBlock} from '~components/ClaimTokensBlock';
import {Faq} from '~components/Faq';
import {HowMuchPem} from '~components/HowMuchPem';

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
      <Faq />
      <HowMuchPem />
    </>
  );
}

export default App;
