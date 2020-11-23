import React, { Component } from 'react';
import hoc from '../../hoc/hoc';
import classes from '../Layout/Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'

class Layout extends Component {
    state = {
        showSideDrawer: false
    }
    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false})
    }
    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return { showSideDrawer: !this.state.showSideDrawer }
        })
    }

    render() {
        return (
            <hoc>
                <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}/>
                <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler}/>
                <main className="content">
                    {this.props.children}
                </main>
            </hoc>
        )
    }
    
}

export default Layout