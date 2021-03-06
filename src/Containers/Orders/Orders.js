import React, { Component } from 'react'
import classes from './Orders.css';
import Order from '../../Components/Order/Order';
import axios from '../../axios-orders';

class Orders extends Component {
    state = {
        orders: [],
        loading: true
    }
    componentDidMount() {
        axios.get('/orders.json')
            .then(res => {
                const fetchOrders = [];
                for (const key in res.data) {
                    fetchOrders.push({
                        ...res.data[key],
                        id: key
                    })
                }
                this.setState({loading: false, orders: fetchOrders})
            })
            .catch(err => {
                this.setState({ loading: false })
            })
    }
    
    render() {
        return (
            <div>
                {this.state.orders.map(order =>
                    <Order
                        ingredients={order.ingredients}
                        price={+order.price}
                        key={order.id}
                    />
                )}
            </div>
        );
    }
}

export default Orders;