import React, { Fragment } from 'react';
import Button from '../../UI/Button/Button.js';

const OrderSummary = props => {
    const ingredientSum = Object.keys(props.ingredients).map((igKey) => {
        return (
            <li key={igKey}>
                <span style={{textTransform: 'capitalize'}}>{igKey}: {props.ingredients[igKey]}</span>
            </li>
        )
    })

    return (
        <Fragment>
            <h3>Your Order</h3>
            <p>Following ingredients:</p>
            <ul>
                {ingredientSum}
            </ul>
            <p><strong>Total Price: {props.totalPrice.toFixed(2)}</strong></p>
            <Button 
            btnType='Danger' 
            click={props.purchaseCanceled}>cancel</Button>
            <Button 
            btnType='Success'
            click={props.purchaseContinued}>continue</Button>
        </Fragment>
    )
} 

export default OrderSummary;