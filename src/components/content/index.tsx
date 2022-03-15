// library
import React, { useContext } from 'react';
// hooks
import { UserLockupsView, useUserLockups } from '~hooks/useUserLockups';
import { useTokenBalance } from '~hooks/useTokenBalance';
// utils
import { formattedTime } from '~utils/time';
import { formatNearAmount } from '~state/near';
// import { claim } from '~services/near';
import { appStore } from '~state/app';
// components
import { HelloBlock } from '~components/helloBlock';
import { ClaimTokensBlock } from '~components/сlaimTokensBlock';
import { TimerRoundStart } from '~components/TimerRoundStart';
import ConnectWallet from '~components/connectWallet';
import Faq from '../../components/faq';
import HowMuchPem from './howMuchPem';
import LeaveTelegram from './LeaveTelegram';
import { TokenSale1 } from '~components/TokenSale1';
// styles
import styles from '~assets/styles/components/content/mainContent.module.scss'

export const Content = () => {
  const { state } = useContext(appStore);

  const { wallet } = state;
  const signedIn = wallet && wallet.signedIn;

  const lookups = useUserLockups();
  const balance = useTokenBalance();

  const url = new URL(window.location.href);
  const transactionHash = url.searchParams.get('transactionHashes');

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        {/* <div>
          {signedIn && lookups && showData(lookups)}
        </div>
        <div>
          {signedIn && lookups && (<button type='button' onClick={() => claim()}>Claim All</button>)}
          {signedIn && transactionHash && (
            <button type='button' onClick={() => {
              const url = `https://explorer.testnet.near.org/transactions/${transactionHash}`
              window.open(url, '_blank');
            }}>Go to explorer</button>
          )}
        </div>
        <div>
          {signedIn && lookups && (<h4>Balance: {formatNearAmount(balance, 4)}</h4>)}
        </div> */}

        <HelloBlock />
        <ConnectWallet />
        <ClaimTokensBlock />
        <TimerRoundStart />
        <TokenSale1 />
        <Faq />
        <HowMuchPem />
        <LeaveTelegram />
      </div>
    </main>
  );
}

const showData = (data: UserLockupsView) => {
  const schedule = data.schedule;
  return (
    <div>
      <h4>Data:</h4>
      <p>account_id: {data.account_id}</p>
      <p>claimed_balance: {formatNearAmount(data.claimed_balance, 4)}</p>
      <p>termination_config: {data.termination_config || 'null'}</p>
      <p>timestamp: {formattedTime(data.timestamp)}</p>
      <p>total_balance: {formatNearAmount(data.total_balance, 4)}</p>
      <p>unclaimed_balance: {formatNearAmount(data.unclaimed_balance, 4)}</p>
      <h4>Schedule:</h4>
      {schedule.map((item: { timestamp: number, balance: string }, index) => {
        return (
          <div key={index}>
            <p>schedule timestamp-{index}: {formattedTime(item.timestamp)}</p>
            <p>schedule balance-{index}: {formatNearAmount(item.balance, 4)}</p>
          </div>
        )
      })}
    </div>
  )
}
