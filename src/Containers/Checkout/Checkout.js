import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import CheckoutSummary from '../../Components/Order/Checkout/CheckoutSummary';
import ContactData from './ContactData/ContactData';

class Checkout extends Component {
  
    onCheckoutCancelledHandler = () => {
        this.props.history.goBack();
    }
    
    onCheckoutContinuedHandler = () => {
        this.props.history.replace('/checkout/contact-data')
    }

    render() {
        return (
            <div>
                <CheckoutSummary
                    onCheckoutCancelled={this.onCheckoutCancelledHandler}
                    onCheckoutContinued={this.onCheckoutContinuedHandler}
                    ingredients={this.props.igns} />
                <Route path={this.props.match.path + '/contact-data'}
                    component={ContactData}
                />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        igns: state.ingredients,
        totalPrice: state.totalPrice
    };
}

export default connect(mapStateToProps)(Checkout);