import React from "react";
import infoLogo from '../../../assets/styles/ClaimTokensBlock/Info.svg'
import percent from '../../../assets/styles/ClaimTokensBlock/Percent.svg'
import lockKey from '../../../assets/styles/ClaimTokensBlock/LockKey.svg'
import info2 from '../../../assets/styles/ClaimTokensBlock/Info2.svg'
import styles from '../../../assets/styles/ClaimTokensBlock/NoConnected.scss'

export const NoConnected = () => {
return(
    <div className={styles.tokensBlock}>
        <div className={styles.tokenSale}>
        <h2 className={styles.saleText}>Token sale: 2-year vesting</h2>
        <button className={styles.buttonInfo}>
            <img className={styles.buttonImg} src={infoLogo} alt="info logo" />
            <span className={styles.buttonText}>How To Buy Token</span>
            </button>
        </div>

        <div className={styles.line}>
            <div className={styles.lineDone}></div>
        </div>

        <div className={styles.amountPem}>
            <div className={styles.sold}>
                <p className={styles.soldText}>Sold</p>
                <div className={styles.numData}>
                    <p className={styles.numText}>5 100 000<span className={styles.pemText}>PEM</span></p>
                    <div className={styles.vertical}></div>
                    <p className={styles.procentText}>22.14%</p>
                </div>
            </div>
            <div className={styles.sold}>
                <p className={styles.soldText}>Total Amount</p>
                <div className={styles.numData}>
                    <p className={styles.numText}>10 000 000<span className={styles.pemText}>PEM</span></p>
                </div>
            </div>
        </div>

        <div className={styles.lineGrey}></div>

        <div>
            <div className={styles.percentBlockAll}>
                <div className={styles.percentBlock}>
                <img className={styles.percentImg} src={percent} alt="percent" />
                    <p className={styles.discountText}>Discount</p>
                </div>
                <p className={styles.percentText}>- 50%</p>
            </div>
            <div className={styles.percentBlockAll}>
                <div className={styles.percentBlock}>
                <img className={styles.percentImg} src={lockKey} alt="lockKey" />
                    <p className={styles.discountText}>Lock-up settings</p>
                </div>
                <div className={styles.percentBlock}>
                <img className={styles.percentImg} src={info2} alt="info" />
                    <p className={styles.daysText}>730 days</p>
                </div>
            </div>
        </div>
    </div>
)
};