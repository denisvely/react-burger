import React from 'react';
import hoc from '../../../hoc/hoc'
import Button from '../../UI/Button/Button'
const orderSummary = (props) => {
    const indgredientSummary = Object.keys(props.ingredients)
        .map(iKey => {
            return (
                <li key={iKey}><span style={{ textTransform: 'capitalize', marginTop: 'gfdgdf'}}>
                    {iKey}</span>: {props.ingredients[iKey]}
                </li>);
        })
    return (
        <hoc>
            <h3>Your Order</h3>
            <p>A delicious burder with the following indgredients:</p>
            <ul>
                {indgredientSummary}
            </ul>
            <p><strong>Total Price: {props.totalPrice.toFixed(2)} $</strong></p>
            <p>Continue to Checkout?</p>
            <Button buttonType="Success" clicked={props.purchasedContinued}>CONTINUE</Button>
            <Button buttonType="Danger" clicked={props.purchasedCanceled}>CANCEL</Button>
        </hoc>
    )
    
};

export default orderSummary