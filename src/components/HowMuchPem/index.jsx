import React from "react";
import styles from '../../assets/styles/HowMuchPem/HowMuchPem.scss';

export const HowMuchPem = () => {
   return(
    <div>
    <h1 className={styles.tytle}>How much PEM can I buy?</h1>
    <div className={styles.oldBlock}> 
        <div className={styles.faqBlock}>
             <div>
                <p className={styles.text}> The <span className={styles.textWrite}> minimum</span>  amount of PEM purchasable in this round is <span className={styles.textWrite}> 1 000 000 PEM,</span>  valued at <span className={styles.textWrite}> $50 000.</span>  </p>
          </div>
         </div>
         <div className={styles.faqBlock}>
             <div>
                <p className={styles.text}> The <span className={styles.textWrite}> maximum</span>  amount of PEM purchasable in this round is <span className={styles.textWrite}> 3 000 000 PEM,</span>  valued at <span className={styles.textWrite}> $150 000.</span>  </p>
          </div>
         </div>
         </div>
    </div>
)
};