// library
import React from 'react'
import { Link } from "react-router-dom";
// components
import ConnectWallet from '~components/connectWallet';
// static
import styles from '../../../assets/styles/components/header/burgerMenu.module.scss'

const BurgerMenu = ({ img, menuList, handleClick, wallet }) => {
  const signedIn = wallet && wallet.signedIn;

  return (
    <nav className={styles.header_menu}>
      <ul className={styles.header_list}>
        <li className={styles.li_a}>
          <Link to="/" className={styles.header_link_menu}>
            Menu
          </Link>
        </li>
        {menuList.map((link, idx) => {
          return (
            <li className={styles.li_b} key={idx}>
              <Link
                to={link.href}
                onClick={handleClick}
                className={styles.header_link}
              >
                {link.label}
              </Link>
              {link.icon && (
                <img src={link.icon} className={styles.icon} alt="arrows" />
              )}
              <img src={img} alt="arrows" className={styles.arrows} />
            </li>
          )
        })}
      </ul>
      {!signedIn && <ConnectWallet />}
      {signedIn &&
        <button type="button" className={styles.signOut} onClick={() => wallet.signOut()}>
          Sign Out
        </button>
      }
    </nav>
  )
}

export default BurgerMenu
