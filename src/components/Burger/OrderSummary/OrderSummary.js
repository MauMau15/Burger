import React from 'react';
import Aux from '../../../hoc/Auxiliary';
import Button from '../../UI/Button/Button';

class OrderSummary extends React.Component{

    render(){

        const ingredientSummary = Object.keys(this.props.ingredients)
        .map((ingredient) => {
            return <li key={ingredient}><span style={{textTransform:'uppercase'}}>{ingredient}</span>: {this.props.ingredients[ingredient]} x {this.props.ingredientPrices[ingredient]} = {this.props.ingredients[ingredient] * this.props.ingredientPrices[ingredient]}</li>;
        });

        return(
            <Aux>
                <h3>Your Order</h3>
                <p>Delicious bruger with the following ingredients: </p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>You are about to pay ${this.props.totalPrice}</strong></p>
                <p>Continue to Checkout?</p>
                <Button btnType="Danger"clicked={this.props.purchaseCancel}>CANCEL</Button>
                <Button btnType="Success" clicked={this.props.purchaseContinue}>CONTINUE</Button>
            </Aux>
        );
    }
}

export default OrderSummary;