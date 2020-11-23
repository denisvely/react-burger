import React from 'react'
import NavItem from './NavItem/NavItem'
import classes from './../NavigationItems/NavigationItems.css'

const navigationItem = () => (
    <ul className="NavigationItems">
        <NavItem exact link="/">Burder Builder</NavItem>
        <NavItem link="/orders">Orders</NavItem>
    </ul>
);

export default navigationItem;