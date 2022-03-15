import React from "react";
import logo from '../../../assets/styles/ClaimTokensBlock/logo.svg'
import info2 from '../../../assets/styles/ClaimTokensBlock/Info2.svg'
import styles from '../../../assets/styles/ClaimTokensBlock/Connected.scss'

export const Connected = () => {
return(
    <div className={styles.tokensBlock}>
        <h2 className={styles.saleText}>Available now</h2>
        <div className={styles.amountPem}>
            <div className={styles.sold}>
                <div className={styles.numData}>
                    <p className={styles.numText}>15,485.0 PEM </p>
                    <img className={styles.logo} src={logo} alt="logo" />
                </div>
            </div>
            <button className={styles.buttonInfo}>
            <span className={styles.buttonText}>Claim Tokens</span>
            </button>
        </div>

        <div className={styles.lineGrey}></div>

        
            <div className={styles.percentBlockAll}>
                <div className={styles.percentBlock}>
                    <p className={styles.discountText}>Total Locked</p>
                </div>
                <div className={styles.percentBlock}>
                <img className={styles.percentImg} src={info2} alt="info" />
                    <p className={styles.daysText}>200 000 <span className={styles.daysPem}>PEM</span></p>
                </div>
            </div>
            <div className={styles.percentBlockAll}>
                <div className={styles.percentBlock}>
                    <p className={styles.discountText}>Claimed</p>
                </div>
                <div className={styles.percentBlock}>
                    <p className={styles.daysText}>85,485.0 <span className={styles.daysPem}>PEM</span></p>
                </div>
            </div>
        
    </div>
)
};