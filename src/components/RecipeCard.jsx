import { AspectRatio, Center, Flex, Heading, Image } from "@chakra-ui/react";
import { TagList } from "./ui/TagList";

export const RecipeCard = ({ clickFn, recipeItem, ...props }) => {
  const filteredHealthLabels = recipeItem.recipe.healthLabels.filter(
    (healthlabel) => {
      return (
        healthlabel.toLowerCase() === "vegan" ||
        healthlabel.toLowerCase() === "vegetarian"
      );
    }
  );

  const isTags =
    recipeItem.recipe.dietLabels.length > 0 ||
    recipeItem.recipe.cautions.length > 0;

  return (
    <Flex cursor={"pointer"} onClick={() => clickFn(recipeItem)} {...props}>
      <Flex h="40px" justify="space-evenly" align="center" gap="8px">
        <TagList labelList={recipeItem.recipe.mealType} size="sm" />
        <TagList labelList={recipeItem.recipe.dishType} size="sm" />
      </Flex>

      <AspectRatio w="100%" ratio={16 / 9}>
        <Image src={recipeItem.recipe.image} alt={recipeItem.recipe.label} />
      </AspectRatio>

      <Center h="55px">
        <Heading fontSize="md" textAlign="center" color="brand.100">
          {recipeItem.recipe.label}
        </Heading>
      </Center>

      <Flex wrap="wrap" h="90px">
        {filteredHealthLabels.length > 0 && (
          <Flex w="100%" justify="space-evenly" align="center">
            <TagList labelList={filteredHealthLabels} size="sm" />
          </Flex>
        )}

        {isTags && (
          <Flex
            w="100%"
            justify="space-evenly"
            align="center"
            wrap="wrap"
            gap="8px"
          >
            {recipeItem.recipe.dietLabels.length > 0 && (
              <Flex justify="space-evenly" wrap="wrap" gap="8px">
                <TagList
                  labelList={recipeItem.recipe.dietLabels}
                  colorScheme="green"
                  size="sm"
                />
              </Flex>
            )}

            {recipeItem.recipe.cautions.length > 0 && (
              <Flex justify="space-evenly" wrap="wrap" gap="8px">
                <TagList
                  labelList={recipeItem.recipe.cautions}
                  colorScheme="red"
                  size="sm"
                />
              </Flex>
            )}
          </Flex>
        )}
      </Flex>
    </Flex>
  );
};
