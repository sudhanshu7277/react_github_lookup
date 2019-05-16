import React from 'react';
import style from './recipe.module.css';
// const Recipe = ({title, colories, image, ingredients})=> {
    const Recipe = ({id, title, url, image})=> {
    return(
        <div className={style.recipe}>
            <h1>{title}</h1>
            <h2>User id : {id}</h2>
            {/*<ol>
                {ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient.text}</li>
                ))}
                </ol>*/}
            <p>{url}</p>
            <img className={style.image} src={image} alt=""/>
        </div>
    );
};

export default Recipe;