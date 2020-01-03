import React from 'react';
import style from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl'

const controls = [
    { label: 'Salad', type: 'salad'},
    { label: 'Bacon', type: 'bacon'},
    { label: 'Cheese', type: 'cheese'},
    { label: 'Meat', type: 'meat'},

]

const BuildControls = props => (
    <div className={style.BuildControls}>
        <p>Current price: <strong>{props.price.toFixed(2)}</strong></p>
        {controls.map(el => (
            <BuildControl 
                added={() => props.ingredientAdded(el.type)} 
                removed={() => props.ingredientRemoved(el.type)} 
                key={el.label} 
                label={el.label}
                disabled={props.disabled[el.type]}/>
        ))}
    </div>
)

export default BuildControls