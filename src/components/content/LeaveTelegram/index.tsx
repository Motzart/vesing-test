// library
import React from "react";
// static
import styles from "~assets/styles/components/LeaveTelegram/LeaveTelegram.scss";

export default function LeaveTelegram() {
  return (
    <div className={styles.send_mail}>
      <p className={styles.text}>
        Leave your <span className={styles.textWrite}>telegram or e-mail </span>
        to become an early PEM investor. We will get in touch shortly.
      </p>
    </div>
  );
};
