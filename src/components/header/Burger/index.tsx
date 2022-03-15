// library
import React from 'react'
import { Link } from "react-router-dom";
// styles
import styles from '../../../assets/styles/components/header/burgerMenu.module.scss'

const BurgerMenu = ({ img, menuList, handleClick }) => {
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
    </nav>
  )
}

export default BurgerMenu
