// library
import React from "react";
import { NavLink } from "react-router-dom";
import { ReactSVG } from "react-svg";
// static
import styles from "~assets/styles/components/logo/logo.module.scss";

const Logo = ({ img }) => {
  return (
    <NavLink to="/">
      <ReactSVG className={styles.header_logo} src={img} wrapper="span" />
    </NavLink>
  );
};

export default Logo;
