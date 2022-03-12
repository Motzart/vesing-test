// library
import React from 'react';
// utils
import { appStore, onAppMount } from '~state/app';
// components
import { NavBar } from '~components/navBar';
import { Content } from '~components/content';

function NoAuthPage() {

  return (
    <>
      <NavBar />
      <Content />
    </>
  )
}

export default NoAuthPage;
