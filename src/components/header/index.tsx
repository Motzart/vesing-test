// library
import React, { useContext, useState, useRef } from "react";
// utils
import { appStore } from "~state/app";
// components
import Logo from "./Logo";
import HeaderMenu from "./HeaderMenu";
import BurgerMenu from "./Burger";
import logoImg from "../../assets/images/header/header_logo.svg";
import imgArrows from "../../assets/images/header/arrows.svg";
// data
import menuList from "../../data-config/menu";
// static
import styles from "~assets/styles/components/header/header.module.scss";

const Header = () => {
  const { state } = useContext(appStore);
  const [enableMenu, setEnableBurgerMenu] = useState(false);
  const burgerButton = useRef(null);

  const { wallet, account } = state;
  const signedIn = wallet && wallet.signedIn;

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
          <a className="nav-link active" aria-current="page" href="#">
            {account && account.accountId}
          </a>
          {signedIn ? (
            <div className="d-flex text-info align-items-center">
              <p className="m-0 px-3">Balance: {wallet.balance}</p>
              <button
                className="btn btn-outline-success"
                type="submit"
                onClick={() => wallet.signOut()}
              >
                Sign Out
              </button>
            </div>
          ) : (
            <button
              className="btn btn-outline-success"
              type="submit"
              onClick={() => wallet.signIn()}
            >
              Connect Near Wallet
            </button>
          )}
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
