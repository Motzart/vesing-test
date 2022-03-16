import React from "react";
import ReactTooltip from 'react-tooltip';
import { useUserLockups } from '~hooks/useUserLockups';
import { formatNearAmount } from '~state/near';
import { claim } from '~services/near';
import { NoConnected } from '~components/сlaimTokensBlock/NoConnected'
import logo from '../../../assets/styles/ClaimTokensBlock/logo.svg'
import info2 from '../../../assets/styles/ClaimTokensBlock/Info2.svg'
import styles from '../../../assets/styles/ClaimTokensBlock/Connected.scss'

export const Connected = () => {

  const lookups = useUserLockups();

  return(
    <>
      <div className={styles.tokensBlock}>
        <h2 className={styles.saleText}>Available now</h2>
        <div className={styles.amountPem}>
          <div className={styles.sold}>
            <div className={styles.numData}>
              <p className={styles.numText}>{lookups && formatNearAmount(lookups.unclaimed_balance, 4)} PEM </p>
              <img className={styles.logo} src={logo} alt="logo" />
            </div>
          </div>
          <button className={styles.buttonInfo} onClick={() => claim()}>
            <span className={styles.buttonText}>Claim Tokens</span>
          </button>
        </div>

        <div className={styles.lineGrey}></div>

        <div className={styles.percentBlockAll}>
          <div className={styles.percentBlock}>
            <p className={styles.discountText}>Total Locked</p>
          </div>
          <ReactTooltip />
          <div className={styles.percentBlock}>
            <img className={styles.percentImg} data-tip="Linear unlock with new tokens available to claim every second" src={info2} alt="info" />
            <p className={styles.daysText}>{lookups && formatNearAmount(lookups.total_balance, 4)} <span className={styles.daysPem}>PEM</span></p>
          </div>
        </div>
        <div className={styles.percentBlockAll}>
          <div className={styles.percentBlock}>
            <p className={styles.discountText}>Claimed</p>
          </div>
          <div className={styles.percentBlock}>
            <p className={styles.daysText}>{lookups &&  formatNearAmount(lookups.claimed_balance, 4)} <span className={styles.daysPem}>PEM</span></p>
          </div>
        </div>

      </div>
      <NoConnected />
    </>
  )
};
