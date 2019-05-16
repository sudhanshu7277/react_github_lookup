import React, {useEffect, useState} from 'react';
import './App.css';
import Recipe from './Recipe';

  const App = () => {
    //const APP_ID = "d3cc0193";
    //const APP_KEY = "045f6ea23168bfcee4486e0750955593";
    const [recipes, setRecipes]=useState([]);
    const [search, setSearch]=useState('');
    const [query, setQuery]=useState('sudhanshu7277');

    useEffect(()=>{
      getData();
    }, [query]);

    const getData = async () => {
      //const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
      // eslint-disable-next-line no-template-curly-in-string
      const response = await fetch(`https://api.github.com/search/users?q=${query}`);
      const responseData = await response.json();
      // setRecipes(responseData.hits);
      setRecipes(responseData.items);
      console.log(responseData.items);
    };
    /*  ABOVE CODE CAN IS == TO BELOW
    const FinalData = [];
    const getData = http.fetch('htp://dataUri')
                    .then(response => {
                    FinalData = response.json();
                    });
                    https://webgradients.com/

                    api link : https://www.edamam.com/,
                    https://developer.edamam.com/edamam-docs-recipe-api
    */

    const updateSearch = e => {
      setSearch(e.target.value);
      console.log(search);
    };

    const getSearchResult = e => {
      e.preventDefault();
      setQuery(search);
      setSearch("");
    };

    return (
      <div className="App">
        <form onSubmit={getSearchResult} className="search-form">
          <input className="search-bar" type="text" 
          value={search} 
          onChange={updateSearch}/>
          <button className="search-button" type="submit">Search</button>
        </form>
        <div className="recipes">
        {recipes.map((item, index)=>(
          <Recipe key={index} id={item.id} title={item.login} url={item.html_url}
          image={item.avatar_url}
          />
          //ingredients={item.ingredients}
        ))}
        </div>
      </div>
    );
  }


export default App;
