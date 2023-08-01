import { Flex, Heading, Image, Text } from "@chakra-ui/react";
import { IngredientList } from "../components/IngredientList";
import { TagList } from "../components/ui/TagList";
import { NutrientList } from "../components/NutrientList";

export const RecipePage = ({ recipeItem }) => {
  // console.log(recipeItem.recipe.totalNutrients.quantity);

  return (
    <Flex
      flexDir="column"
      minH="100vh"
      w={["100%", "100%", "100%", "992px"]}
      m="auto"
      bg="brand.200"
      overflow="visible"
    >
      <Image
        w="100vw"
        h="40vh"
        mt="60px"
        objectFit="cover"
        src={recipeItem.recipe.image}
        alt={recipeItem.recipe.label}
      />

      <Flex flexDir="column" gap="1rem" w="100%" p="1rem">
        <Heading size={["sm", "md", "lg"]} w="100%" color="brand.100">
          {recipeItem.recipe.label}
        </Heading>

        <Flex align="center" gap="8px">
          <TagList labelList={recipeItem.recipe.mealType} size={["sm", "md"]} />
          <TagList labelList={recipeItem.recipe.dishType} size={["sm", "md"]} />
        </Flex>

        <Text fontSize={["xs", "sm", "md"]} mb="1rem">
          Total cooking time: {recipeItem.recipe.totalTime} minutes
          <br />
          Servings: {recipeItem.recipe.yield}
        </Text>
      </Flex>

      <Flex wrap="wrap" justify="space-between">
        <Flex direction="column" w={["100%", "60%"]} p="0 1rem 2rem 1rem">
          <Heading size={["xs", "sm", "md"]} mb="1rem" color="brand.100">
            Ingredients:
          </Heading>
          <IngredientList ingredientLines={recipeItem.recipe.ingredientLines} />

          {recipeItem.recipe.dietLabels.length > 0 && (
            <>
              <Heading
                size={["xs", "sm", "md"]}
                mt="2rem"
                mb="1rem"
                color="brand.100"
              >
                Diet:
              </Heading>
              <Flex direction="row" wrap="wrap" gap="8px">
                <TagList
                  labelList={recipeItem.recipe.dietLabels}
                  colorScheme="green"
                />
              </Flex>
            </>
          )}

          {recipeItem.recipe.cautions.length > 0 && (
            <>
              <Heading
                size={["xs", "sm", "md"]}
                mt="2rem"
                mb="1rem"
                color="brand.100"
              >
                Cautions:
              </Heading>
              <Flex direction="row" wrap="wrap" gap="8px">
                <TagList
                  labelList={recipeItem.recipe.cautions}
                  colorScheme="red"
                />
              </Flex>
            </>
          )}
        </Flex>

        <Flex w={["100%", "40%"]} direction="column" padding="0 1rem 2rem 1rem">
          <Heading
            size={["xs", "sm", "md"]}
            textAlign={["left", "right"]}
            mb="1rem"
            color="brand.100"
          >
            Health labels:
          </Heading>
          <Flex direction={["row", "row-reverse"]} wrap="wrap" gap="8px">
            <TagList
              labelList={recipeItem.recipe.healthLabels}
              size={["sm", "sm", "md"]}
            />
          </Flex>

          <Heading
            size={["xs", "sm", "md"]}
            textAlign={["left", "right"]}
            mt="2rem"
            mb="1rem"
            color="brand.100"
          >
            Total nutrients:
          </Heading>
          <NutrientList recipeItem={recipeItem} />
        </Flex>
      </Flex>
    </Flex>
  );
};
