import { useEffect, useState } from "react";
import {
  HourlyForecastProps,
  WeatherHourlyDataProps,
} from "../../types/weather";
import { getWeatherDailyForecast } from "../../services/service";
import Weather from "../Weather/Weather";

export default function DailyForecast(weather: HourlyForecastProps) {
  const [daily, setDaily] = useState<WeatherHourlyDataProps>();

  useEffect(() => {
    const getHourlyForecast = async () => {
      try {
        const hourlyForecastData = await getWeatherDailyForecast({
          latitude: weather.lat,
          longitude: weather.lon,
        });

        setDaily(hourlyForecastData);
      } catch (error) {
        console.error("Error fetching current city weather:", error);
      }
    };

    getHourlyForecast();
  }, [weather]);

  return (
    <div className="w-full h-[230px] text-slate-50 flex justify-between p-8 bg-slate-800 rounded-md">
      {weather &&
        daily?.daily?.slice(1).map((data, key) => (
          <>
            {key < 5 && (
                <Weather icon={data.weather[0].icon} day={data?.dt} temp={data?.temp.day} />
              )}
          </>
        ))}
    </div>
  );
}
