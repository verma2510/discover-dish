import './recipelist.css'
import RecipeCard from "../recipecard/RecipeCard";

const RecipeList = ({ recipe }) => {
  return (
    <div className="recipeList">
      {recipe && recipe.length > 0 ? (
        recipe.map((recipes) => (
          <RecipeCard key={recipes.id} recipes={recipes} />
        ))
      ) : (
        <p>No recipes found.</p>
      )}
    </div>
  );
};

export default RecipeList;
