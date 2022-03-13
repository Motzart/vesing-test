import React, { useContext } from 'react';
import { UserLockupsView, useUserLockups } from '~hooks/useUserLockups';
import { formatNearAmount } from '~state/near';
import { formattedTime } from '~utils/time';
import { useTokenBalance } from '~hooks/useTokenBalance';
import { claim } from '~services/near';
import { appStore } from '~state/app';

export const Content = () => {
  const { state } = useContext(appStore);

  const { wallet } = state;
  const signedIn = wallet && wallet.signedIn;

  const lookups = useUserLockups();
  const balance = useTokenBalance();

  const url = new URL(window.location.href);
  const transactionHash = url.searchParams.get('transactionHashes');

  return (
    <div className="container pt-3">
      <div className="row">
        <div className="col-md-4">
          <br/>
          <br />
          {signedIn && lookups && showData(lookups)}
        </div>
        <div className="col-md-4">
          <br/>
          <br />
          {signedIn && lookups && (<button className="btn btn-outline-success" onClick={() => claim()}>Claim All</button>)}
          {signedIn && transactionHash && (
            <button className="btn btn-outline-success" onClick={() => {
              const url = `https://explorer.testnet.near.org/transactions/${transactionHash}`
              window.open(url, '_blank');
            }}>Go to explorer</button>
          )}
        </div>
        <div className="col-md-4">
          <br/>
          <br/>
          {signedIn && lookups && (<h4>Balance: {formatNearAmount(balance, 5)}</h4>)}
        </div>
      </div>
    </div>
  );
}

const showData = (data: UserLockupsView) => {
  const schedule = data.schedule;
  return (
    <div>
      <h4>Data:</h4>
      <p>account_id: {data.account_id}</p>
      <p>claimed_balance: {formatNearAmount(data.claimed_balance, 5)}</p>
      <p>termination_config: {data.termination_config || 'null'}</p>
      <p>timestamp: {formattedTime(data.timestamp)}</p>
      <p>total_balance: {formatNearAmount(data.total_balance, 5)}</p>
      <p>unclaimed_balance: {formatNearAmount(data.unclaimed_balance, 5)}</p>
      <h4>Schedule:</h4>
      {schedule.map((item: {timestamp: number, balance: string}, index) => {
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
