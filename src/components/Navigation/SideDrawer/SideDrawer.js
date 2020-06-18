import React, {Fragment} from 'react';
import Logo from '../../Logo/Logo.js';
import NavigationItems from '../NavigationItems/NavigationItems.js';
import styles from './SideDrawer.module.css';
import Backdrop from '../../UI/Backdrop/Backdrop.js';

const SideDrawer = (props) => {
    let attachedStyles = [styles.SideDrawer, styles.Close]

    if (props.open) {
        attachedStyles = [styles.SideDrawer, styles.Open]
    }

    return (
        <Fragment>
            <Backdrop show={props.open} click={props.closed} />
            <div className={attachedStyles.join(' ')}>
                <div className={styles.Logo}>
                    <Logo />
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Fragment>
    )
}

export default SideDrawer;