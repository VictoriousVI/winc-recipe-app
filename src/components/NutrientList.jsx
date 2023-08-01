import { Flex, Text } from "@chakra-ui/react";

export const NutrientList = ({ recipeItem }) => {
  return (
    <Flex direction={["row", "row-reverse"]} wrap="wrap" gap="1rem">
      <Text fontSize={["xs", "sm", "md"]}>
        {Math.round(recipeItem.recipe.calories)}
        <br />
        Calories
      </Text>

      <Text fontSize={["xs", "sm", "md"]}>
        {Math.round(recipeItem.recipe.totalNutrients.CHOCDF.quantity)} g
        <br />
        Carbs
      </Text>

      <Text fontSize={["xs", "sm", "md"]}>
        {Math.round(recipeItem.recipe.totalNutrients.PROCNT.quantity)} g
        <br />
        Protein
      </Text>

      <Text fontSize={["xs", "sm", "md"]}>
        {Math.round(recipeItem.recipe.totalNutrients.FAT.quantity)} g
        <br />
        Fat
      </Text>

      <Text fontSize={["xs", "sm", "md"]}>
        {Math.round(recipeItem.recipe.totalNutrients.CHOLE.quantity)} mg
        <br />
        Cholesterol
      </Text>

      <Text fontSize={["xs", "sm", "md"]}>
        {Math.round(recipeItem.recipe.totalNutrients.NA.quantity)} mg
        <br />
        Sodium
      </Text>
    </Flex>
  );
};
