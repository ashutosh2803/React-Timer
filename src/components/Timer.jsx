import React, { useState, useEffect } from 'react'
import styles from "../components/Timer.module.css";

const Timer = () => {
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false);
    
    const handleReset = () => {
        setSeconds(0);
        setIsActive(false);
    }
    const handleToggle = () => {
        setIsActive(!isActive);
    }
    useEffect(() => {
        let interval = null;
        if (isActive) {
            interval = setInterval(() => {
                setSeconds((seconds) => seconds + 1);
                setIsActive(true);
            }, 1000)
        } else if (!isActive && seconds !== 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
        },[isActive, seconds])
    
    return (
        <div className={styles.TimerWrapper}>
            <div className={styles.seconds}><span>{seconds}</span> s</div>
            <div className={styles.btnWrapper}>
                <button className={styles.toggleBtn} onClick={handleToggle}>{isActive ? "STOP" : "START"}</button>
                <button className={styles.resetBtn} onClick={handleReset}>RESET</button>
            </div>
        </div>
    )
}

export default Timer
