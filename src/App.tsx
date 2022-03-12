// library
import React, { useContext, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// utils
import { appStore, onAppMount } from '~state/app';

import NoAuthPage from '~components/noConnectWallet'

function App() {
  const { dispatch } = useContext(appStore);

  const onMount = () => {
    dispatch(onAppMount());
  };

  useEffect(onMount, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<NoAuthPage />} />
        <Route path="/how-to-buy" element={<NoAuthPage />} />
      </Routes>
    </Router>
  )
}

export default App;
