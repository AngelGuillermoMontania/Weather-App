import { Flex } from "@chakra-ui/react";
import Card from "./Card";

export default function ContainCard({ cities, quitarCard }) {
  return (
    <Flex p="5" flexWrap="wrap" justifyContent="space-around">
      {cities.length > 0
        ? cities.map((city) => {
            return (
              <Card
                key={city.id}
                id={city.id}
                name={city.name}
                clouds={city.clouds.all}
                humidity={city.main.humidity}
                temp={city.main.temp}
                feels_like={city.main.feels_like}
                sunrise={city.sys.sunrise}
                sunset={city.sys.sunset}
                icon={city.weather[0].icon}
                description={city.weather[0].description}
                wind={city.wind.speed}
                quitarCard={quitarCard}
              />
            );
          })
        : ""}
    </Flex>
  );
}
