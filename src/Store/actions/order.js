import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';

export const purchaseBurgerSucess = (id, orderData) => {
    return {
        type: actionTypes.PURCHASE_BURGER_SUCCESS,
        orderId: id,
        orderData: orderData
    }; 
};

export const purchaseBurgerFails = (id, orderData) => {
    return {
        type: actionTypes.PURCHASE_BURGER_FAIL,
        orderId: id,
        orderData: orderData
    };
};

export const purchaseBurgerStart = (orderData) => {
    return dispatch => {
        axios.post('/orders.json', orderData)
            .then(response => {
                dispatch(purchaseBurgerSucess(response.data))
            })
            .catch(error =>
                dispatch(purchaseBurgerSucess(error)))
    };
};




