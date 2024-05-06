import { FormEvent, useState, useEffect, ChangeEvent } from "react";
import {
  getWeatherCurrentCity,
  getWeather,
} from "./services/service";
import { useGeolocated } from "react-geolocated";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import WeatherGeral from "./components/WeatherGeral/WeatherGeral";
import { WeatherDataProps } from "./types/weather";
import HourlyForecast from "./components/HourlyForecast/HourlyForecast";
import DailyForecast from "./components/DailyForecast/DailyForecast";
import { InputBase } from "@mui/material";

function App() {
  const { coords } = useGeolocated({
    positionOptions: {
      enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
  });
  const [search, setSearch] = useState("");
  const [userLocation, setUserLocation] = useState<{
    latitude: number;
    longitude: number;
  }>({
    latitude: coords?.latitude!,
    longitude: coords?.longitude!,
  });
  const [weather, setWeather] = useState<WeatherDataProps>();

  useEffect(() => {
    if (coords) {
      setUserLocation({
        latitude: coords.latitude,
        longitude: coords.longitude,
      });
    }
  }, [coords]);

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const handleSearch = async (event: FormEvent) => {
    event.preventDefault();

    if (search === "") {
      return;
    }

    const weatherData = await getWeather(search);
    setWeather(weatherData);
  };

  const getUserLocation = async () => {
    if (coords) {
      setUserLocation({
        latitude: coords.latitude,
        longitude: coords.longitude,
      });
    }

    if (userLocation.latitude !== 0 && userLocation.longitude !== 0) {
      try {
        const weatherData = await getWeatherCurrentCity({
          latitude: userLocation.latitude,
          longitude: userLocation.longitude,
        });

        setWeather(weatherData);
        console.log(weather);
      } catch (error) {
        console.error("Error fetching current city weather:", error);
      }
    }
  };

  return (
    <div className="mx-auto max-w-6xl my-12 space-y-6 px-5">
      <div className="flex justify-between gap-10">
        <Paper component="form" className="w-full p-1 flex items-center">
          <InputBase
            className="flex-1 w-full"
            placeholder="Buscar cidade..."
            onChange={handleSearchChange}
            inputProps={{ "aria-label": "search google maps" }}
          />
          <IconButton
            className="p-3"
            type="button"
            aria-label="search"
            onClick={handleSearch}
          >
            <SearchIcon />
          </IconButton>
        </Paper>
        <button
          onClick={getUserLocation}
          className="bg-slate-800 text-slate-300 p-4 rounded-md flex-1 min-w-max"
        >
          Localização atual
        </button>
      </div>
      <div className="flex flex-row gap-4">
        {weather && (
          <>
            <WeatherGeral
              description={weather?.weather[0]?.description}
              temp={weather?.main.temp}
              feels_like={weather?.main.feels_like}
              icon={weather?.weather[0].icon}
              humidity={weather?.main.humidity}
              pressure={weather?.main.pressure}
              wind={weather?.wind}
              sunrise={weather?.sys.sunrise}
              sunset={weather?.sys.sunset}
              name={weather.name}
              temp_min={weather?.main.temp_min}
              temp_max={weather?.main.temp_max}
              country={weather?.sys.country}
            />
            <div className="flex flex-1 w-full flex-col gap-5">
              <HourlyForecast
                lat={weather?.coord?.lat}
                lon={weather?.coord?.lon}
              />
              <DailyForecast
                lat={weather?.coord?.lat}
                lon={weather?.coord?.lon}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
