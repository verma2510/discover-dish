import React, { useState } from "react";
import { Api } from "../../api-services/Api";
import RecipeList from "../../components/recipelist/RecipeList";
import "./home.css";

export const Home = () => {
  const [recipe, setRecipe] = useState([]);
  const [loading, setLoading] = useState(false);

  return (
    <div className="home">
      <div className="homeWrapper">
        <div className="homeContainer">
          <div className="homeImage">
            <img
              src="https://wallpapers.com/images/hd/paella-dish-with-veggies-on-board-0ey63p78wcip8k67.jpg"
              alt="Dish"
            />
          </div>
          <div className="homeSearchInfo">
            <h1 className="homeTitle">Find Your Recipe</h1>
            <p className="homeSubtitle">
              Discover the perfect dish for any occasion
            </p>
            <div className="homeSearchbar">
              <Api setRecipe={setRecipe} setLoading={setLoading} />
            </div>
          </div>
        </div>
        <div className="homeResults">
          <h2>Here are your search results</h2>
          {loading ? <p>Loading...</p> : <RecipeList recipe={recipe} />}
        </div>
      </div>
    </div>
  );
};
