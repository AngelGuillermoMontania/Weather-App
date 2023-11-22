import { Flex } from "@chakra-ui/react";
import Search from "./Search";

export default function Header({ addCity }) {
  return (
    <Flex
      alignItems="center"
      gap="3"
      px={5}
      py={10}
      bg="#000000"
      justifyContent="space-around"
      border="1px solid black"
    >
      <Search addCity={addCity} />
    </Flex>
  );
}
