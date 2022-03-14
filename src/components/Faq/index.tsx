import React, {useState} from "react";
import plus from '../../assets/styles/Faq/Plus.svg';
import minus from '../../assets/styles/Faq/Minus.svg';
import styles from '../../assets/styles/Faq/Faq.scss';

const faqList = [
     {
         title: 'How to Buy PEM Tokens',
         text: 'We strive to involve investors interested in long-term partnerships throughout the first round of investment. That is why we provide a 50% discount with a 2-year linear unlock. Moreover, we limit the minimum and maximum amount of investment to build PembRock in a true DAO tradition. After the purchase, PEM tokens will unlock evenly over 2 years. Every second, more PEM tokens will be available to claim. Every month ~4% of the purchased amount will be unlocked. PEM holders can track their investments through the dashboard by connecting their NEAR wallet.'
     },
     {
        title: 'How much PEM can I buy?',
        text: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."'
    },
     
]

export const Faq = () => {
    const [button, setButton] = useState(false);

    const changeButton = () => {
        button === false
           ? setButton(true)
           : setButton(false)
    };

    const changesSign = () => {
        if (!button){
            return plus;
        }else{
            return minus;
        }
    }

   return(
    <div>
    <h1 className={styles.tytle}>FAQ</h1>
    
    {faqList.map((block, idx) => {
          return (
            <div className={styles.faqBlock} key={idx}>
            <div className={styles.titleBlock}>
                <h2 className={styles.title}>{block.title}</h2>
                <button onClick={changeButton} className={styles.faqButton}>
                    <img src={changesSign()} alt="minus" />
                </button>
            </div>
             <div>
          {button ? (
            <p className={styles.text}>{block.text}</p>
            ) : (
              ''
            )}
          </div>
         </div>
          )
        })}
    </div>
)
};