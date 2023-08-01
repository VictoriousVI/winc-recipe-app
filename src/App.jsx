import { RecipeListPage } from "./pages/RecipeListPage";
import { RecipePage } from "./pages/RecipePage";
import { useState } from "react";
import { Header } from "./components/ui/Header";

export const App = () => {
  const [selectedRecipe, setSelectedRecipe] = useState();

  return (
    <>
      <Header clickFn={setSelectedRecipe} recipeItem={selectedRecipe} />

      {selectedRecipe ? (
        <RecipePage recipeItem={selectedRecipe} />
      ) : (
        <RecipeListPage clickFn={setSelectedRecipe} />
      )}
    </>
  );
};
