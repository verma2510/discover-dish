import { createStore } from "redux";

const ADD_TO_FAVORITES = "ADD_TO_FAVORITES";
const REMOVE_FROM_FAVORITES = "REMOVE_FROM_FAVORITES";

export const addToFavorites = (recipe) => ({
  type: ADD_TO_FAVORITES,
  payload: recipe,
});

export const removeFromFavorites = (recipeId) => ({
  type: REMOVE_FROM_FAVORITES,
  payload: recipeId,
});

const initialState = {
  favorites: [],
};

export const favoritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVORITES:
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };

    case REMOVE_FROM_FAVORITES:
        return{
            ...state,
            favorites: state.favorites.filter(
                (recipe) => recipe.id !== action.payload
            ),
        };
        default:
            return state;
  }
};

export const store = createStore(favoritesReducer);