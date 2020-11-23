import React, { Component } from 'react';
import { connect } from 'react-redux';

import hoc from '../../hoc/hoc';
import Burger from '../../Components/Burger/Burger';
import BuildControls from '../../Components/Burger/BuildControls/BuildControls';
import Modal from '../../Components/UI/Modal/Modal';
import OrderSummary from '../../Components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../Components/UI/Spinner/Spinner';
import * as burgerBuilderActions from '../../Store/actions/index';

class BurgerBuilder extends Component {
    state = {
        purchaseble: false,
        purchasing: false,
        loading: false
    }
    // componentDidMount() {
    //     this.props.onInitiIngredients();
    // }
    updatePurchaseState(ingredients) {
        const sum = Object.keys(ingredients)
            .map(iKey => {
                return ingredients[iKey]
            })
            .reduce((sum, el) => {
                return sum + el;

            }, 0)
        return sum > 0;
    }

    purchaseHandler = () => {
        this.setState({ purchasing: true})
    }

    purchaseCancelHandler = () => {
        this.setState({ purchasing: false })
    }

    purchaseContinueHandler = () => {
      this.props.history.push('/checkout')
    }

    render() {
        const disabledInfo = {
            ...this.props.igns
        }
        for (const key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }
        let orderSummary =  <OrderSummary
                                totalPrice={this.props.totalPrice}
                                ingredients={this.props.igns}
                                purchasedCanceled={this.purchaseCancelHandler}
                                purchasedContinued={this.purchaseContinueHandler}
                            />
        if (this.state.loading) {
            orderSummary = <Spinner/>
        }
        return (
            <hoc>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    {orderSummary}
                </Modal>
                <Burger ingredients={this.props.igns}/>
                <BuildControls
                    ordered={this.purchaseHandler}
                    ingredientAdded={this.props.onIngredientAdded}
                    ingredientRemoved={this.props.onIngredientRemoved}
                    disabled={disabledInfo}
                    purchaseble={this.updatePurchaseState(this.props.igns)}
                    price={this.props.totalPrice} />
            </hoc>
        );
    }
}

const mapStateToProps = state => {
    return {
        igns: state.ingredients,
        totalPrice: state.totalPrice,
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onIngredientAdded: (ingName) => dispatch(burgerBuilderActions.addIngredient(ingName)),
        onIngredientRemoved: (ingName) => dispatch(burgerBuilderActions.removeIngredient(ingName)),
        // onInitiIngredients: () => dispatch(burgerBuilderActions.setIngredients())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(BurgerBuilder)