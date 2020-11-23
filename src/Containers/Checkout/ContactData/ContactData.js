import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '../../../Components/UI/Button/Button';
import classes from './ContactData.css';
import axios from '../../../axios-orders';
import Spinner from '../../../Components/UI/Spinner/Spinner';
import Input from '../../../Components/UI/Input/Input';

class ContactData extends Component {
    state = {
        orderForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Name'
                },
                value: ''
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your E-Mail'
                },
                value: ''
            },
            country: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Country'
                },
                value: ''
            },
            zipCode: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Zip Code'
                },
                value: ''
            },
            deliveryMethod: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        { value: 'fastest', displayValue: 'Fastest' },
                        { value: 'cheapest', displayValue: 'Cheapest' }
                    ]
                },
                value: ''
            }
        },
        loading: false
    }

    orderHandler = (e) => {
        e.preventDefault();
        const formData = {};
        for (const key in this.state.orderForm) {
          formData[key] = this.state.orderForm[key].value
        }
         const order = {
            ingredients: this.props.igns,
            price: this.props.totalPrice,
            orderData: formData
        }
        axios.post('/orders.json', order)
            .then(response => {
                if (response.status === 200) {
                    this.setState({ loading: true })
                }
                setTimeout(() => {
                    this.props.history.push('/')
                }, 1000);
               
            })
            .catch(error => 
                this.setState({ loading: false}))
    }

    inputChangedHadler = (event, inputIdentifier) => {
        const updatedOrderForm = {
            ...this.state.orderForm
        }
        const updatedFormElement = {
            ...updatedOrderForm[inputIdentifier]
        }
        updatedFormElement.value = event.target.value;
        updatedOrderForm[inputIdentifier] = updatedFormElement;

        this.setState({orderForm: updatedOrderForm})
    }
    
    render() {
        const formElementsArray = [];
        for (const key in this.state.orderForm) {
            formElementsArray.push({
                id: key,
                config: this.state.orderForm[key]
        })
        }
        let form = (
            <form>
                {formElementsArray.map(formEl => (
                    <Input
                        key={formEl.id}
                        elementConfig={formEl.config.elementConfig}
                        elementType={formEl.config.elementType}
                        value={formEl.value}
                        changed={(event) => this.inputChangedHadler(event, formEl.id)}
                    />
                ))}
                <Button buttonType="Success" clicked={this.orderHandler}>ORDER</Button>
            </form>
        );
        if (this.state.loading) {
            form = <Spinner/>
        }
        return (
            <div className="ContactData">
                <h4>Enter your Contact Data</h4>
                {form}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        igns: state.ingredients,
        totalPrice: state.totalPrice
    };
}

export default connect(mapStateToProps)(ContactData);