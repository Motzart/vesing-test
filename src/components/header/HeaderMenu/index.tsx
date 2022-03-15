// library
import React from "react";
import { Link } from "react-router-dom";
// static
import styles from "~assets/styles/components/header/headerMenu.module.scss";

const HeaderMenu = ({ menuList }) => {
  return (
    <nav className={styles.navigation}>
      <ul className={styles.header_list}>
        {menuList.map((link, key) => {
          return (
            <li key={key}>
              <Link
                to={link.href}
                className={`${styles.header_link} ${styles.active_link}`
                }
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
