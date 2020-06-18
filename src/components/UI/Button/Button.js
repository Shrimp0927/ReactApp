import React from 'react';
import styles from './Button.module.css';

const Button = (props) => (<button className={[styles.Button, styles.Button[props.btnType]].join(' ')} onClick={props.click} disabled={props.disabled}>{props.children}</button>)
 
export default Button;