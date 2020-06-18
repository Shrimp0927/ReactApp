import React from 'react';
import styles from './BuildControl.module.css';

const BuildControl = props => {
    return (
        <div className={styles.BuildControl}>
            <div className={styles.Label}>{props.label}</div>
            <button onClick={props.removed} className={styles.Less}>-</button>
            <button onClick={props.added} className={styles.More}>+</button>
        </div>
    )
}

export default BuildControl;