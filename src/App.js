import React, { Component } from 'react';
import './app.module.css';
import Layout from './hoc/Layout/Layout.js';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder.js';
import Checkout from './containers/Checkout/Checkout.js';
import { Route, Switch } from 'react-router-dom';
import Orders from './containers/Orders/Orders.js';

class App extends Component {
    
    render () {
        return (
            <div>
                <Layout>
                    <Switch>
                        <Route path="/checkout" component={Checkout} />
                        <Route path="/orders" component={Orders} />
                        <Route path="/" exact component={BurgerBuilder} />
                    </Switch>
                </Layout>
            </div>
        )
    }
}

export default App;