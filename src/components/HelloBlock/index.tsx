import React, { useContext } from 'react';
import { appStore } from '~state/app';
import styles from '../../assets/styles/HelloBlock/HelloBlock.scss'

export const HelloBlock = () => {
  const { state } = useContext(appStore);

  const { wallet, account } = state;
  const signedIn = wallet && wallet.signedIn;
  
    
  return(
        <div>
            {
            !signedIn 
            ? <div className={styles.heloBlock}>
            <h1 className={styles.titleHelo}>Hello, PEM investor</h1>
            <h2 className={styles.informationHeader}>Connect your NEAR wallet to enter the dashboard</h2>
              </div>
            : <div className={styles.heloBlock}>
               <h1 className={styles.titleHelo}><span className={styles.informationHeader}>Hello,</span> {account && account.accountId}</h1>
               <h2 className={styles.informationHeader}>It’s your dashboard, where you can track your PEM portfolio</h2>
              </div>
           }
      </div>
    )
}