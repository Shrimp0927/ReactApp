import React, { Component } from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary.js';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import ContactData from './ContactData/ContactData.js';

class Checkout extends Component {
    checkoutCancel = () => {
        this.props.history.goBack()
    }

    checkoutContinue = () => {
        this.props.history.replace('/checkout/contact-data')
    }
    
    render () {
        return (
            <div>
                <CheckoutSummary
                ingredients={this.props.ings}
                cancel={this.checkoutCancel}
                continue={this.checkoutContinue} />
                <Route path={this.props.match.path + '/contact-data'} component={ContactData} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        ings: state.ingredients
    }
}

export default connect(mapStateToProps)(Checkout);