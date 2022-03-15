// library
import React, { useContext, useEffect } from 'react';
// utils
import { appStore, onAppMount } from '~state/app';

// components
import Layout from '~components/layout';
import { Content } from '~components/content';

function App() {
  const { dispatch } = useContext(appStore);

  const onMount = () => {
    dispatch(onAppMount());
  };

  useEffect(onMount, []);

  return (
    <Layout>
      <Content />
    </Layout>
  )
}

export default App;
