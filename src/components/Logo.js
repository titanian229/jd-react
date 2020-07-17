import React from 'react';
import styles from './Logo.module.scss'

function Logo() {
    return (
        <div className={styles.logo}>
            J<span className={styles.central}>T</span>L
        </div>
    )
}

export default Logo;