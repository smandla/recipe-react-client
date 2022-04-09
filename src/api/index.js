import axios from "axios";
const url = "https://localhost:8082/recipes";

export const fetchRecipes = () => axios.get(url);
export const createRecipe = (newRecipe) => axios.post(url, newRecipe);
