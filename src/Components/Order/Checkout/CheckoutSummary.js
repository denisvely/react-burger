import React from 'react';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import ButtonStyles from '../../UI/Button/Button.css'
import classes from './CheckoutSummary.css';

const CheckoutSummary = (props) => {
    return (
        <div className="CheckoutSummary">
            <h1>Hope it tastes well</h1>
            <div style={{width: '100%',  margin: 'auto'}}>
                <Burger ingredients={props.ingredients}/>
            </div>
            <div>
                <Button
                    clicked={props.onCheckoutCancelled}
                    buttonType="Danger"
                >CANCEL</Button>
                <Button
                    clicked={props.onCheckoutContinued}
                    buttonType="Success">CONTINUE</Button>
            </div>
            
        </div>
    );
}

export default CheckoutSummary;