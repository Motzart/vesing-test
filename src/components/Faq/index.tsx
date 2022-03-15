// library
import React from "react";
// static
import styles from '../../assets/styles/Faq/Faq.scss';

const Faq = () => {
   return (
      <div>
         <h1 className={styles.tytle}>How to Buy PEM Tokens</h1>
         <div className={styles.faqBlock}>
            <div>
               <p className={styles.text}>We strive to involve investors interested in long-term partnerships throughout the first round of investment. That is why we provide <span className={styles.textWrite}> a 50% discount with a 2-year linear unlock.</span> Moreover, we limit the minimum and maximum amount of investment to build PembRock in a true DAO tradition.</p>
               <p className={styles.text}>After the purchase, PEM tokens will unlock evenly over 2 years. Every second, more PEM tokens will be available to claim. <span className={styles.textWrite}>Every month ~4% </span>of the purchased amount will be unlocked. </p>
               <p className={styles.text}>PEM holders can track their investments through the dashboard by connecting their NEAR wallet.</p>
            </div>
         </div>
      </div>
   )
};

export default Faq
