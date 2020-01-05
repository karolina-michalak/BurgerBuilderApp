import React, { Component } from 'react';
import ReactAux from '../../../hoc/ReactAux';
import Button from '../../../components/UI/Button/Button'

class OrderSummary extends Component{
    render(){
        const ingredientSummary = Object.keys(this.props.ingredients).map(el => {
            return (<li key={el}><span style={{textTransform: 'capitalize'}}>{el}</span>: {this.props.ingredients[el]}</li>)
        })
        return(
            <ReactAux>
                <h3>Your order</h3>
                <p>burger with following ingredients:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total price: {this.props.price.toFixed(2)}</strong></p>
                <p>Continue to checkout?</p>
                <Button btnType="Danger" clicked={this.props.purchaseCancelled}>CANCEL</Button>
                <Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>
            </ReactAux>
        )
    }
}

export default OrderSummary