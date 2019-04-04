import React from 'react';
import Aux from '../../../hoc/Auxiliary';
import Button from '../../UI/Button/Button';

const orderSummary = props => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map((ingredient) => {
            return <li key={ingredient}><span style={{textTransform:'uppercase'}}>{ingredient}</span>: {props.ingredients[ingredient]} x {props.ingredientPrices[ingredient]} = {props.ingredients[ingredient] * props.ingredientPrices[ingredient]}</li>;
        });
    return(
        <Aux>
            <h3>Your Order</h3>
            <p>Delicious bruger with the following ingredients: </p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>You are about to pay ${props.totalPrice}</strong></p>
            <p>Continue to Checkout?</p>
            <Button btnType="Danger"clicked={props.purchaseCancel}>CANCEL</Button>
            <Button btnType="Success" clicked={props.purchaseContinue}>CONTINUE</Button>
        </Aux>
    );
};

export default orderSummary;