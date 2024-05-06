import moment from "moment";
import { WeatherDataSingleProps } from "../../types/weather";

export default function Weather(weather: WeatherDataSingleProps) {

  const viewDay = (timestamp: number): string => {
    const data = moment.unix(timestamp).startOf('day');
    
    const tomorrow = moment().add(1, 'day').startOf('day');

    if (data.isSame(tomorrow, 'day')) {
        return 'Amanhã';
    } else {
        return data.format('DD/MM');
    }
};

  return (
    <div className="flex flex-col justify-between items-center bg-slate-900/60 p-4 rounded-md">
      <p>
        {weather.hour
          ? moment.unix(weather?.hour!).format("HH:mm")
          : viewDay(weather.day!)}
      </p>
      <img src={`http://openweathermap.org/img/wn/${weather.icon}.png`} />
      <p>{Math.round(weather.temp)} <sup>&deg;C</sup></p>
    </div>
  );
}
