// library
import React from "react";
import { Link } from "react-router-dom";
import { ReactSVG } from "react-svg";
// static
import styles from "~assets/styles/components/logo/logo.module.scss";

const Logo = ({ img }) => {
  return (
    <Link to="/">
      <ReactSVG className={styles.header_logo} src={img} wrapper="span" />
    </Link>
  );
};

export default Logo;
