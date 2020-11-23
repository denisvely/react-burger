import React from 'react'
import classes from './SideDrawer.css'
import Logo from '../../../Components/Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import Backdrop from '../../UI/Backdrop/Backdrop'
import hoc from '../../../hoc/hoc'

const SideDrawer = (props) => {
   
    return (
        <hoc>
            <Backdrop
                show={props.open}
                clicked={props.closed} />
            <div className={props.open ? 'SideDrawer Open' : 'SideDrawer Closed'}>
            <div>
                <Logo />
            </div>
            
            <nav>
                <NavigationItems />
            </nav>
            </div>
        </hoc>
    );
};

export default SideDrawer;