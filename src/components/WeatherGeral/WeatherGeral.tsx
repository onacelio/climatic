import { WeatherGeralProps } from "../../types/weather";
import { TbWind } from "react-icons/tb";
import { WiHumidity } from "react-icons/wi";
import { IoThermometerOutline } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";

export default function WeatherGeral(weather: WeatherGeralProps) {
  return (
    <div className="flex justify-between p-8 bg-slate-800 rounded-md w-[480px] flex-1 h-[480px]">
      <div className="flex flex-col w-full justify-between">
        <div className="flex justify-end w-full text-slate-400 items-center gap-2">
          <FaLocationDot />
          <p>
            {weather.name}, {weather.country}
          </p>
        </div>
        <div className="flex  items-center justify-center flex-col w-full">
          <p className="font-bold text-[5.5rem] text-slate-300">
            {Math.round(weather.temp)}{" "}
            <span className="text-slate-500">
              <sup>&deg;C</sup>
            </span>
          </p>
          <div className="flex flex-row gap-3">
            <h2 className="text-slate-300">{Math.round(weather.temp_max)} <sup>&deg;C</sup></h2>
            <h2 className="text-slate-500">{Math.round(weather.temp_min)} <sup>&deg;C</sup></h2>
          </div>
        </div>
        <div className="flex flex-row justify-between">
          <div className="flex flex-row items-center gap-2 bg-slate-900/60 rounded-md p-2">
            <TbWind className="size-8 text-slate-400" />
            <div className="flex flex-col text-slate-400">
              <h3>Vento</h3>
              <p>{Math.round(weather.wind.speed)} km/h</p>
            </div>
          </div>
          <div className="flex flex-row text-slate-400 gap-2 items-center bg-slate-900/60 rounded-md p-2">
            <WiHumidity className="size-8" />
            <div className="flex flex-col">
              <h3>Umidade</h3>
              <p>{Math.round(weather.humidity)} %</p>
            </div>
          </div>
          <div className="flex flex-row text-slate-400 gap-2 items-center bg-slate-900/60 rounded-md p-2">
            <IoThermometerOutline className="size-8" />
            <div className="flex flex-col">
              <h3>Sensação térmica</h3>
              <p>
                {Math.round(weather.feels_like)} <sup>&deg;C</sup>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
