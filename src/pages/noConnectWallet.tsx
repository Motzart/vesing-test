// library
import React from 'react';
// components
import { Content } from '~components/content';
import Layout from '~components/layout';
import { HelloBlock } from '~components/HelloBlock'
import { ClaimTokensBlock } from '~components/ClaimTokensBlock';

function NoConnectWallet() {

  return (
    <Layout>
      <Content />
      <HelloBlock />
      <ClaimTokensBlock />
    </Layout>
  )
}

export default NoConnectWallet;
