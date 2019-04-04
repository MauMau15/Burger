import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = props => {
    //get all ingredients
    let ingredients = Object.keys(props.ingredients)
    //iterate each ingredient
        .map(ingredient => {
            //iterate each value
            return [...new Array(props.ingredients[ingredient])].map((_,i)=>{
                //return an ingredient
                return <BurgerIngredient key={ingredient + i} type={ingredient}></BurgerIngredient>;
            });
        })
        .reduce((prev,curr) => {
            return prev.concat(curr)
        },[]);

        if(ingredients.length === 0){
            ingredients = <p>Please, start adding ingredients!</p>;
        }        
    
    return(
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"></BurgerIngredient>
                {ingredients}
            <BurgerIngredient type="bread-bottom"></BurgerIngredient>
        </div>
    );
};

export default burger;