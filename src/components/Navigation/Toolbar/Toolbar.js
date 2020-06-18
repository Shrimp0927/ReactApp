import React from 'react';
import styles from './Toolbar.module.css';
import Logo from '../../Logo/Logo.js';
import NavigationItems from '../NavigationItems/NavigationItems.js';

const Toolbar = props => {
    return (
        <header className={styles.Toolbar}>
            <div onClick={props.click}>Menu</div>
            <div className={styles.Logo}>
                <Logo />
            </div>
            <nav className={styles.DesktopOnly}>
                <NavigationItems />
            </nav>
        </header>
    )
}

export default Toolbar;