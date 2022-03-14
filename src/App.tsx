// library
import React, { useContext, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// utils
import { appStore, onAppMount } from '~state/app';
// components
import NoConnectWallet from '~pages/noConnectWallet'

function App() {
  const { dispatch } = useContext(appStore);

  const onMount = () => {
    dispatch(onAppMount());
  };

  useEffect(onMount, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<NoConnectWallet />} />
        <Route path="/how-to-buy" element={<NoConnectWallet />} />
      </Routes>
    </Router>
  )
}

export default App;
