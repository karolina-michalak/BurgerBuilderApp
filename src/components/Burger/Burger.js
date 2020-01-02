import React from 'react';
import style from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

const Burger = props => {
    const transformedIngredients = Object.keys(props.ingredients).map(el => {
        return [...Array(props.ingredients[el])].map((_, i) => {
            <BurgerIngredient key={el + 1} type={el}/>
        })
    })
    return(
        <div className={style.Burger}>
            <BurgerIngredient type="bread-top"/>
            <BurgerIngredient type="cheese"/>
            <BurgerIngredient type="meat"/>
            <BurgerIngredient type="bread-bottom"/>
        </div>
    )
}

export default Burger