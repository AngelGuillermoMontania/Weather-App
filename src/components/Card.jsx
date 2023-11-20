import {
  CardBody,
  Card as CardChakra,
  Stack,
  Heading,
  Text,
  Divider,
  CardFooter,
  Image,
  CardHeader,
  CloseButton,
  Flex,
} from "@chakra-ui/react";
import dayjs from "dayjs";
import { useEffect, useState } from "react";

export default function Card({
  id,
  name,
  clouds,
  humidity,
  temp,
  feels_like,
  sunrise,
  sunset,
  icon,
  description,
  wind,
  quitarCard,
}) {
  const [descrip, setDescrip] = useState("");
  useEffect(() => {
    switch (description) {
      case "nubes":
        setDescrip("Nublado");
        break;
      case "muy nuboso":
        setDescrip("Muy nublado");
        break;
    }
  }, [id]);

  return (
    <CardChakra maxW="md" m="5">
      <CardHeader
        display="flex"
        justifyContent="space-between"
        alignItems="start"
      >
        <Heading size="md">{name}</Heading>
        <CloseButton onClick={() => quitarCard(id)} />
      </CardHeader>
      <CardBody>
        <Flex justifyContent="space-around">
          <Image
            src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
            borderRadius="lg"
            border="1px solid gray"
          />
          <Stack>
            <Text fontSize="2xl">Actual: {temp}°</Text>
            <Text fontSize="2xl">{descrip}</Text>
          </Stack>
        </Flex>
        <Flex mt="6" spacing="3" justifyContent="space-between" flexWrap="wrap">
          <Text w="50%">Sensacion: {feels_like}°</Text>
          <Text w="50%">Humedad: {humidity}°</Text>
          <Text w="50%">Lluvia: {clouds}°</Text>
          <Text w="50%">Viento: {wind} km/h</Text>
        </Flex>
      </CardBody>
      <Divider />
      <CardFooter display="flex" justifyContent="space-between">
        <Text>Amanecer: {dayjs(sunrise * 1000).format("HH:mm")}</Text>
        <Text>Atardecer: {dayjs(sunset * 1000).format("HH:mm")}</Text>
      </CardFooter>
    </CardChakra>
  );
}
