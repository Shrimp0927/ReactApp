import React, { Component, Fragment } from 'react';
import styles from './Layout.module.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar.js';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer.js';

class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    sideDrawerClosedHandler = () => {
        this.setState({ showSideDrawer: false })
    }

    sideDrawerOpenHandler = () => {
        this.setState((prevState) => {
            return { showSideDrawer: !prevState.showSideDrawer }
        })
    }
    
    render () {
        return (
        <Fragment>
            <Toolbar click={this.sideDrawerOpenHandler} />
            <SideDrawer 
            open={this.state.showSideDrawer} 
            closed={this.sideDrawerClosedHandler} />
            <main className={styles.Content}>
                {this.props.children}
            </main>
        </Fragment>
    )
    }
}

export default Layout;