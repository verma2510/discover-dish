import { useSelector, useDispatch } from "react-redux";
import { removeFromFavorites } from "../../redux/Redux";
import RecipeCard from "../../components/recipecard/RecipeCard";
import './favorites.css'

export const Favorites = () => {
  const favorites = useSelector((state) => state.favorites);
  const dispatch = useDispatch();

  const handleRemove = (recipeId) => {
    dispatch(removeFromFavorites(recipeId));
  };

  return (
    <div className="favorites">
      <div className="favoritesWrapper">
        <h1 className="favoritesTitle">My Favorite Recipes</h1>
        {favorites.length > 0 ? (
          <div className="favoriteList">
            {favorites.map((recipe) => (
              <div className="favoriteItem" key={recipe.id}>
                <RecipeCard recipes={recipe} />
                <button className="removeButton" onClick={() => handleRemove(recipe.id)}>
                  Remove from favorites
                </button>
              </div>
            ))} 
          </div>
        ) : (
          <p>You have no favorite recipes!</p>
        )}
      </div>
    </div>
  );
};
