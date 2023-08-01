import { data } from "../utils/data";
import { useState } from "react";
import { RecipeSearch } from "../components/RecipeSearch";
import { RecipeList } from "../components/RecipeList";
import { Flex } from "@chakra-ui/react";

export const RecipeListPage = ({ clickFn }) => {
  const [searchField, setSearchField] = useState("");

  const matchedRecipes = data.hits.filter((hit) => {
    return (
      hit.recipe.label.toLowerCase().includes(searchField.toLowerCase()) ||
      hit.recipe.healthLabels.some((label) =>
        label.toLowerCase().includes(searchField.toLowerCase())
      )
    );
  });

  const handleChange = (event) => setSearchField(event.target.value);

  return (
    <Flex
      direction="column"
      align="center"
      bg="brand.100"
      padding="60px 2rem 2rem 2rem"
      minH="100vh"
    >
      <RecipeSearch changeFn={handleChange} />
      <RecipeList clickFn={clickFn} recipes={matchedRecipes} />
    </Flex>
  );
};
