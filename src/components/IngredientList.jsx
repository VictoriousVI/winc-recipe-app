import { ListItem, UnorderedList } from "@chakra-ui/react";

export const IngredientList = ({ ingredientLines }) => {
  return (
    <UnorderedList fontSize={["xs", "sm", "md"]} ml="1rem">
      {ingredientLines.map((ingredientLine) => (
        <ListItem key={ingredientLine}>{ingredientLine}</ListItem>
      ))}
    </UnorderedList>
  );
};
