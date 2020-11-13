import React from 'react';
import style from './recipe.module.css';

const Recipe = ({title, calories, image, ingredients, url}) => {
    return (
        <div className={style.recipe}>
            <h1>{title}</h1>
            <ol>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <a href={url} className={style.button}>Click Here for Full Recipe</a>
            <p>{calories}</p>
            <img className={style.image} src={image} alt=""></img>
        </div>
    );
}

export default Recipe;