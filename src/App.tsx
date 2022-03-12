import React, { useContext, useEffect } from 'react';
import { appStore, onAppMount } from '~state/app';
import { NavBar } from '~components/navBar';
import {HelloBlock} from '~components/HelloBlock'
import { Content } from '~components/content';

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
    </>
  );
}

export default App;
