import React from 'react';
import style from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'
import { array } from 'prop-types';

const Burger = props => {
    let transformedIngredients = Object.keys(props.ingredients).map(el => {
        return [...Array(props.ingredients[el])].map((_, i) => {
            return <BurgerIngredient key={el + 1} type={el}/>
        })
    }).reduce((arr, el) => {
        return arr.concat(el)
    }, [])

    if(transformedIngredients.length === 0){
        transformedIngredients = <p>Please start adding ingredients</p>

    }

    console.log(transformedIngredients)
    return(
        <div className={style.Burger}>
            <BurgerIngredient type="bread-top"/>
                {transformedIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    )
}

export default Burger