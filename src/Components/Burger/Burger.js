import React from 'react';
import BurgerStyles from './../Burger/Burger.css';
import BurgerIngredients from './BurgerIngredients/BurgerIngredient';

const burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredients)
        .map(iKey => {
            return [...Array(props.ingredients[iKey])].map((_, i) => {
                return <BurgerIngredients key={iKey + i} type={iKey} />;
            });
        })
        .reduce((arr, el) => {
            return arr.concat(el)
        }, [])
    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start addding Ingredients!</p>
    }
    return (
        <div className="Burger">
            <BurgerIngredients type="bread-top" />
            {transformedIngredients}
            <BurgerIngredients type="bread-bottom" />
        </div>
    );
}

export default burger;