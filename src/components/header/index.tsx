// library
import React, { useState, useRef } from "react";
// components
import Logo from "./Logo";
import HeaderMenu from "./HeaderMenu";
import BurgerMenu from "./Burger";
// data
import menuList from "../../data-config/menu";
// static
import logoImg from "../../assets/images/header/header_logo.svg";
import tokenImg from "../../assets/images/header/pembrock_icon.svg";
import imgArrows from "../../assets/images/header/arrows.svg";
import styles from "~assets/styles/components/header/header.module.scss";

const Header = () => {
  const [enableMenu, setEnableBurgerMenu] = useState(false);
  const burgerButton = useRef(null);

  const addClasses = (element, nameClass) => {
    element.contains(nameClass)
      ? element.remove(nameClass)
      : element.add(nameClass);
  };

  const noScroll = () => {
    let overflow = document.body.style.overflow
    if (!enableMenu) {
      overflow = "hidden";
    } else {
      overflow = "visible";
    }
  };

  const handleClick = () => {
    addClasses(burgerButton.current.classList, `${styles.active}`);

    setEnableBurgerMenu(!enableMenu);

    noScroll();
  };

  return (
    <header className={styles.header}>
      <div className={styles.header_body}>
        <div className={styles.logo_block}>
          <Logo img={logoImg} />
        </div>
        <HeaderMenu menuList={menuList} />
        <div className={styles.mobile_block}>
          <div className={styles.token}>
            <img src={tokenImg} alt='Pembrock token icon' />
            &ensp;
            &asymp;
            &ensp;
            <span className={styles.token_price}>$0.1</span>
          </div>
          {enableMenu && (
            <BurgerMenu
              img={imgArrows}
              menuList={menuList}
              handleClick={handleClick}
            />
          )}
          <button
            onClick={handleClick}
            className={styles.header_burger}
            ref={burgerButton}
          >
            <span />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
