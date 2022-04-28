import React from 'react';
import styles from "./Skeleton.module.scss";

const Skeleton = () => {
    return (
        <div className={styles.skeleton}>
            <div className={styles.dark}></div>
            <div className={styles.light}></div>
            <div className={styles.light}></div>
            <div className={styles.light}></div>
            <div className={styles.light}></div>
        </div>
    );
};

export default Skeleton;