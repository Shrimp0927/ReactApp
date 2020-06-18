import React, { Component, Fragment } from 'react';
import Burger from '../../components/Burger/Burger.js';
import BuildControls from '../../components/Burger/BuildControls/BuildControls.js';
import Modal from '../../components/UI/Modal/Modal.js';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary.js';
import Spinner from '../../components/UI/Spinner/Spinner.js';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler.js';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions/index';
import axios from '../../axios-orders';


class BurgerBuilder extends Component {
    state = {
        purchasable: false,
        purchasing: false,
    }

    componentDidMount () {
        console.log(this.props)
        this.props.onInitIngredients()
    }
    
    purchaseContinueHandler = () => {
        this.props.history.push('/checkout')
    }
    
    purchaseCancelHandler = () => {
        this.setState({ purchasing: false })
    }

    purchaseHandler = () => {
        this.setState({ purchasing: true })
    }

    updatePurchaseState = ( ingredients ) => {
        const sum = Object.keys( ingredients ).map(igKey => {
            return ingredients[igKey]
        }).reduce((sum, el) => {
            return sum + el
        }, 0)
        return sum > 0
    }

    render () {
        const disabledInfo = {
            ...this.props.ings
        }

        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }

        let orderSummary = null
        
        let burger = this.props.error ? <p>Ingredients can't be loaded</p> : <Spinner />
        
        if (this.props.ings) {
            burger = (
                <Fragment>
                    <Burger ingredients={this.props.ings} />
                    <BuildControls 
                    ingredientAdded={this.props.onIngredientAdded}
                    ingredientRemoved={this.props.onIngredientRemoved}
                    disabled={disabledInfo}
                    price={this.props.price}
                    purchasable={this.updatePurchaseState(this.props.ings)}
                    ordered={this.purchaseHandler} />
                </Fragment>
            )
            orderSummary = <OrderSummary 
                ingredients={this.props.ings}
                purchaseCanceled={this.purchaseCancelHandler}
                purchaseContinued={this.purchaseContinueHandler}
                totalPrice={this.props.price} />
        }
        
        return (
            <Fragment>
                <Modal clicked={this.purchaseCancelHandler} show={this.state.purchasing}>
                    {orderSummary}
                </Modal>
                {burger}
            </Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        ings: state.ingredients,
        price: state.totalPrice,
        error: state.error,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onIngredientAdded: (ingName) => dispatch(actionCreators.addIngredient(ingName)),
        onIngredientRemoved: (ingName) => dispatch(actionCreators.removeIngredient(ingName)),
        onInitIngredients: () => dispatch(actionCreators.initIngredients)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios));