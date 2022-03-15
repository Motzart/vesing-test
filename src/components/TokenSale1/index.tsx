import React from "react";
import CalendarBlank from '../../assets/styles/TokenSale1/CalendarBlank.svg'
import ChartPie from '../../assets/styles/TokenSale1/ChartPie.svg'
import lockKey from '../../assets/styles/ClaimTokensBlock/LockKey.svg'
import percent from '../../assets/styles/ClaimTokensBlock/Percent.svg'
import styles from '../../assets/styles/TokenSale1/TokenSale1.scss'

export const TokenSale1 = () => {
return(
    <div className={styles.tokensBlock}>
        <h2 className={styles.saleText}>Token sale: 1-year vesting</h2>
        <div className={styles.percentBlockAll}>
                <div className={styles.percentBlock}>
                <img className={styles.percentImg} src={CalendarBlank} alt="CalendarBlank" />
                    <p className={styles.discountText}>Date</p>
                </div>
                    <p className={styles.daysText}>09.03.2022 13:24:12</p>
            </div> <div className={styles.percentBlockAll}>
                <div className={styles.percentBlock}>
                <img className={styles.percentImg} src={ChartPie} alt="ChartPie" />
                    <p className={styles.discountText}>Amount</p>
                </div>
                    <p className={styles.daysText}>7 142.857 PEM</p>
            </div>
        <div className={styles.percentBlockAll}>
                <div className={styles.percentBlock}>
                <img className={styles.percentImg} src={percent} alt="percent" />
                    <p className={styles.discountText}>Discount</p>
                </div>
                <p className={styles.percentText}>- 30%</p>
            </div>
            <div className={styles.percentBlockAll}>
                <div className={styles.percentBlock}>
                <img className={styles.percentImg} src={lockKey} alt="lockKey" />
                    <p className={styles.discountText}>Lock-up settings</p>
                </div>
                    <p className={styles.daysText}>365 days</p>
            </div>
    </div>
)
};