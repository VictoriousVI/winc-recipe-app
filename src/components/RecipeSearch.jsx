import { SearchIcon } from "@chakra-ui/icons";
import {
  FormControl,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";

export const RecipeSearch = ({ changeFn }) => {
  return (
    <FormControl maxW="400px" mt="2rem" mb="2rem">
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <SearchIcon color="brand.100" />
        </InputLeftElement>
        <Input onChange={changeFn} bg="white" focusBorderColor="brand.200" />
      </InputGroup>
    </FormControl>
  );
};
