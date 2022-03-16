import React from 'react'
import { Link } from "react-router-dom";
// components
import ConnectWallet from '~components/connectWallet';
// static
import styles from '../../../assets/styles/components/header/burgerMenu.module.scss'

type Props = {
  img: string,
  menuList: [],
  handleClick: Function,
  wallet: Object
}

const BurgerMenu = ({ img, menuList, handleClick, wallet }: Props) => {
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
      <div>
      {<ConnectWallet disabled={signedIn}/>}
      {signedIn &&
        <button type="button" className={styles.signOut} onClick={() => wallet.signOut()}>
          Sign Out
        </button>
      }
      </div>
    </nav>
  )
}

export default BurgerMenu
