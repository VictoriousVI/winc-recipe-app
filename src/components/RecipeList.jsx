import { Flex } from "@chakra-ui/react";
import { RecipeCard } from "./RecipeCard";

export const RecipeList = ({ clickFn, recipes }) => {
  return (
    <Flex
      flexDir={["column", "row"]}
      justify="center"
      alignItems="center"
      wrap={["nowrap", "wrap"]}
      gap="2rem"
      w="100%"
    >
      {recipes.map((recipeItem) => (
        <RecipeCard
          clickFn={clickFn}
          key={recipeItem.recipe.label}
          recipeItem={recipeItem}
          direction="column"
          w={["100%", "46%", "30%", "22%", "17%"]}
          bg="brand.200"
          borderRadius="10px"
        />
      ))}
    </Flex>
  );
};
