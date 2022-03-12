// library
import React, { useState, useRef } from "react";
// components
import ButtonLaunch from "../ButtonLaunch/ButtonLaunch";
import Logo from "./Logo/Logo";
import HeaderMenu from "./HeaderMenu/HeaderMenu";
import BurgerMenu from "./Burger/BurgerMenu";
import logoImg from "../../images/header/header_logo.svg";
import imgArrows from "../../images/header/arrows.svg";
// data
import menuList from "../../data-config/menu";
// static
import styles from "~assets/styles/components/header/header.module.scss";

const Header = () => {
  const [enableButton, setEnableButton] = useState(true);
  const [enableMenu, setEnableBurgerMenu] = useState(false);
  const [menu, setMenu] = useState(false);
  const burgerButton = useRef(null);

  const addClasses = (element, nameClass) => {
    element.contains(nameClass)
      ? element.remove(nameClass)
      : element.add(nameClass);
  };

  const noScroll = () => {
    if (!menu) {
      document.body.style.overflow = "hidden";
      setMenu(true);
    } else {
      document.body.style.overflow = "visible";
      setMenu(false);
    }
  };

  const handleClickBtn = (e) => {
    console.log("click button Launch app");
  };

  const handleClick = (e) => {
    addClasses(burgerButton.current.classList, `${styles.active}`);

    setEnableButton(!enableButton);
    setEnableBurgerMenu(!enableMenu);

    noScroll();
  };

  return (
    <header className={styles.header}>
      <div className={styles.header_body}>
        <div className={styles.menu_logo_block}>
          <Logo img={logoImg} />
          <HeaderMenu menuList={menuList} ref={ref} />
        </div>
        <div className={styles.menu_block}>
          {enableButton && <ButtonLaunch handleClick={handleClickBtn} />}
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
