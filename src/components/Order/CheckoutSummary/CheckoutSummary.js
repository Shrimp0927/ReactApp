import React from 'react';
import Burger from '../../Burger/Burger.js';
import Button from '../../UI/Button/Button.js';
import styles from './CheckoutSummary.module.css';

const CheckoutSummary = (props) => {
    return (
        <div className={styles.CheckoutSummary}>
            <h1>Enjoy</h1>
            <div style={{width: '100%', margin: 'auto', height: '300px'}}>
                <Burger ingredients={props.ingredients} />
            </div>
            <Button click={props.cancel} btnType="Danger">cancel</Button>
            <Button click={props.continue} btnType="Success">continue</Button>
        </div>
    )
}

export default CheckoutSummary;