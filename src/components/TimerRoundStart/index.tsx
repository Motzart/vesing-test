import React from 'react';
import ellipse from '../../assets/styles/TimerRoundStart/ellipse.svg'
import Clock from '../../assets/styles/TimerRoundStart/Clock.svg'
import styles from '../../assets/styles/TimerRoundStart/TimerRoundStart.scss'

export const TimerRoundStart = () => {
    return (
        <div className={styles.mainUnit}>
            <img src={ellipse} alt={ellipse} />
            <p className={styles.text}>Next round Start in:</p>

            <div className={styles.timerBlock}>
            <img src={Clock} alt={Clock} />
            <span className={styles.timer}>24:00:12</span>
            </div>
        </div>
    )
}