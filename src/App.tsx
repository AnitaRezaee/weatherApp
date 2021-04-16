import { useState } from "react";
import "./App.css";
import CustomCard from "./components/cards/CustomCard";
import SearchBar from "./components/searchbar";
import WeatherContent from "./components/weatherContent/weatherContent";

function App() {
  const [city, setCity] = useState("");
  const [temperature, setTemperature] = useState(0);
  const [discrip, setDiscription] = useState("");
  const [icon, setIcon] = useState("");

  const handleCityChange = (input: React.ChangeEvent<HTMLInputElement>) => {
    setCity(input.target.value);
  };

  const setWeatherContent = () => {
    const API_KEY = "b10bdd217d784053f84c039a40642e1e";
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const URL = API_URL + `?q=${city}&appid=${API_KEY}&units=metric`;

    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        // If city exists, update weather details
        if (data.cod === 200) {
          setTemperature(data.main.temp);
          setDiscription(data.weather[0].main);
          setIcon(data.weather[0].icon);
        } else {
          throw data.cod;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="App">
      <SearchBar
        city={city}
        handleCityChange={handleCityChange}
        setWeatherContent={setWeatherContent}
      />
      <CustomCard>
        <WeatherContent
          temperature={temperature}
          discription={discrip}
          icon={icon}
        />
      </CustomCard>
    </div>
  );
}

export default App;
