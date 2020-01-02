import React, { Component } from 'react';
import ReactAux from '../../hoc/ReactAux';
import Burger from '../../components/Burger/Burger'


class BurgerBuilder extends Component{
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        }
    }
    render(){
        return(
            <ReactAux>
                <Burger ingredients={this.state.ingredients}/>
                <div>Build Controls</div>
            </ReactAux>
        )
    }

}

export default BurgerBuilder