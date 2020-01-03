import React from 'react';
import ReactAux from '../../../hoc/ReactAux'

const OrderSummary = props => {
    const ingredientSummary = Object.keys(props.ingredientSummary).map(el => {
        return (<li><span style={{textTransform: 'uppercase'}}>{el}</span>: {props.ingredients[el]}</li>)
    })
    return (
        <ReactAux>
            <h3>Your order</h3>
            <p>burger with following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
        </ReactAux>
    )

}

export default OrderSummary