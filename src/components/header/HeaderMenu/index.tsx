// library
import React from "react";
import { NavLink } from "react-router-dom";
// static
import styles from "~assets/styles/components/header/headerMenu.module.scss";

const HeaderMenu = ({ menuList }) => {
  return (
    <nav className={styles.navigation}>
      <ul className={styles.header_list}>
        {menuList.map((link, key) => {
          return (
            <li key={key}>
              <NavLink
                to={link.href}
                className={(isActive) =>
                  `${styles.header_link} ` + (!isActive && styles.active_link)
                }
              >
                {link.label}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default HeaderMenu;
