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
        {controls.map(el => (
            <BuildControl added={() => props.ingredientAdded(el.type)} key={el.label} label={el.label}/>
        ))}
    </div>
)

export default BuildControls