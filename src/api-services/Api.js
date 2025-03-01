import React, { useEffect, useState } from "react";
import axios from "axios";
import { SearchBar } from "../components/searchbar/SearchBar";

export const Api = ({ setRecipe, setLoading }) => {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchRecipes = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          "https://api.spoonacular.com/recipes/complexSearch",
          {
            params: {
              query: query,
              apiKey: "fdf00b730ba14864bdab29e909051d75",
            },
          }
        );
        setRecipe(response.data.results);
      } catch (error) {
        console.error("Error fetching recipes: ", error);
      } finally {
        setLoading(false);
      }
    };

    if (query) {
      fetchRecipes();
    }
  }, [query, setRecipe, setLoading]);

  return <SearchBar setQuery={setQuery} />;
};
