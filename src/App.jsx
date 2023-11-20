import { useState } from "react";
import Header from "./components/Header";
import { Box, useToast } from "@chakra-ui/react";
import Clima from "./assets/sun-18.gif";
import axios from "axios";
import ContainCard from "./components/ContainCard";

function App() {
  const [cities, setCities] = useState([]);
  const toast = useToast();

  async function addCity(nameCity) {
    try {
      const { data } = await axios(
        `https://api.openweathermap.org/data/2.5/weather?q=${nameCity}&units=metric&lang=es&appid=${
          import.meta.env.VITE_API_KEY
        }`
      );
      const existe = cities ? cities.find((city) => city.id === data.id) : null;
      if (existe) {
        return toast({
          title: "Ciudad ya existente",
          status: "info",
          duration: 5000,
          isClosable: true,
        });
      }
      setCities([...cities, data]);
      toast({
        title: "Ciudad Agregada",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    } catch (error) {
      return toast({
        title: "Ciudad no existente",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  }

  function quitarCard(id) {
    console.log(id);
    const newCities = cities.filter((city) => city.id !== id);
    setCities(newCities);
  }

  return (
    <Box bgImage={Clima} h="100vh" bgPosition="center" bgSize="cover">
      <Header addCity={addCity} />
      <ContainCard cities={cities} quitarCard={quitarCard} />
    </Box>
  );
}

export default App;
