import { ArrowLeftIcon } from "@chakra-ui/icons";
import { Grid, GridItem, Heading, IconButton, Image } from "@chakra-ui/react";

export const Header = ({ clickFn, recipeItem }) => {
  return (
    <Grid
      pos="fixed"
      zIndex="3"
      top="0"
      left="0"
      w="100vw"
      h="60px"
      templateColumns={{
        base: "65px 1fr 65px",
        md: "1rem 65px 1fr 65px 1rem",
      }}
      justifyItems="center"
      alignItems="center"
      bg="white"
    >
      <GridItem colStart={{ base: "1", md: "2" }} colEnd={["2", "2", "3"]}>
        <Image src="/src/assets/winc.svg" w={50} />
      </GridItem>

      <GridItem colStart={["2", "2", "3"]} colEnd={["3", "3", "4"]}>
        <Heading color="brand.100" textAlign="center" size={["md", "lg"]}>
          Winc Recipe Finder
        </Heading>
      </GridItem>

      <GridItem colStart={["3", "3", "4"]} colEnd={["4", "5"]}>
        {recipeItem && (
          <IconButton
            onClick={() => clickFn()}
            aria-label="Go back"
            icon={<ArrowLeftIcon />}
            bg="brand.100"
            color="white"
          />
        )}
      </GridItem>
    </Grid>
  );
};
