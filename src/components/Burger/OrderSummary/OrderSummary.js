import React from 'react';
import ReactAux from '../../../hoc/ReactAux'

const OrderSummary = props => {
    const ingredientSummary = Object.keys(props.ingredients).map(el => {
        return (<li key={el}><span style={{textTransform: 'capitalize'}}>{el}</span>: {props.ingredients[el]}</li>)
    })
    return (
        <ReactAux>
            <h3>Your order</h3>
            <p>burger with following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>continue to checkout?</p>
        </ReactAux>
    )

}

export default OrderSummary