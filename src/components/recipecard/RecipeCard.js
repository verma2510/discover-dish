import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToFavorites, removeFromFavorites } from "../../redux/Redux";
import "./recipecard.css";

const RecipeCard = ({ recipes }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);

  const isFavorite = favorites.some((recipe) => recipe.id === recipes.id);

  const handleFavoriteClick = () => {
    if (isFavorite) {
      dispatch(removeFromFavorites(recipes.id));
    } else {
      dispatch(addToFavorites(recipes));
    }
  };

  if (!recipes || !recipes.image) {
    return null;
  }

  return (
    <div className="recipeCard">
      <img src={recipes.image} alt={recipes.title} />
      <h3>{recipes.title}</h3>
      <button
        className={`favoriteButton ${isFavorite ? "favorite" : ""}`}
        onClick={handleFavoriteClick}
      >
        {isFavorite ? "Remove Favorite" : "Add to Favorites"}
      </button>
    </div>
  );
};

export default RecipeCard;
