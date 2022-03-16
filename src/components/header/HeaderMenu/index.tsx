// library
import React, { useState } from "react";
import { Link } from "react-router-dom";
// static
import styles from "~assets/styles/components/header/headerMenu.module.scss";

// type menuList = Array<Object>

const HeaderMenu = ({ menuList }) => {
  const [menu, setMenu] = useState(menuList)
  const changeActiveLink = (el: React.MouseEvent<HTMLAnchorElement>) => {
    let menu = [...menuList]
    menu.map((link) => {
      link.active = false
      if (el.target.getAttribute('data-label') === link.label) {
        link.active = true
      }
    })
    setMenu(menu)
  }

  return (
    <nav className={styles.navigation}>
      <ul className={styles.header_list}>
        {menu.map((link, key) => {
          return (
            <li key={key}>
              <Link
                to={link.href}
                onClick={changeActiveLink.bind(this)}
                className={`${link.active && styles.active_link} ${styles.header_link}`}
                data-label={link.label}
              >
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default HeaderMenu;
