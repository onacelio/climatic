import { useEffect, useState } from "react";
import {
  HourlyForecastProps,
  WeatherHourlyDataProps,
} from "../../types/weather";
import { getWeatherHourlyForecast } from "../../services/service";
import Weather from "../Weather/Weather";

export default function HourlyForecast(weather: HourlyForecastProps) {
  const [weatherHourly, setWeatherHourly] = useState<WeatherHourlyDataProps>();

  useEffect(() => {
    const getHourlyForecast = async () => {
      try {
        const hourlyForecastData = await getWeatherHourlyForecast({
          latitude: weather.lat,
          longitude: weather.lon,
        });

        setWeatherHourly(hourlyForecastData);
      } catch (error) {
        console.error("Error fetching current city weather:", error);
      }
    };

    getHourlyForecast();
  }, [weather]);

  return (
    <div className="w-full h-[230px] text-slate-50 flex justify-between p-8 bg-slate-800 rounded-md">
      {weather &&
        weatherHourly?.hourly?.slice(1).map((data, key) => (
          <>
            {key < 5 && (
                <Weather icon={data.weather[0].icon} hour={data.dt} temp={data.temp} />
              )}
          </>
        ))}
    </div>
  );
}
