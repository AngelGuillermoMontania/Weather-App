import { useState } from "react";
import { Input, Button, Center, Box, Flex } from "@chakra-ui/react";

export default function Search({ addCity }) {
  const [nameCity, setNameCity] = useState("");

  return (
    <Flex w="35%" justifyContent="space-around">
      <Input
        w="70%"
        variant="filled"
        placeholder="Ciudad..."
        onChange={(e) => setNameCity(e.target.value)}
        value={nameCity}
      />
      <Button
        colorScheme="teal"
        size="md"
        onClick={() => {
          setNameCity("");
          addCity(nameCity);
        }}
      >
        Buscar
      </Button>
    </Flex>
  );
}
