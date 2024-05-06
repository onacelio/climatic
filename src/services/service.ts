import axios from 'axios';
import { GetWeatherCurrentCityProps } from '../types/weather';
import { toast } from 'sonner';

const urlWeather = 'https://api.openweathermap.org/data/2.5/';
const urlCity = 'http://api.openweathermap.org/geo/1.0/';

export async function getWeather(city: string) {
  const url = `${urlWeather}weather?lang=pt_br&units=metric&q=${city}&appid=0aad4dc5d102cc7af8c27b47c08a7885`

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    toast.error(`Error fetching current city weather: ${error}`);
    throw error;
  }
}

export async function getWeatherCurrentCity({ latitude, longitude }: GetWeatherCurrentCityProps) {
  const urlGetCity = `${urlCity}reverse?lat=${latitude}&lon=${longitude}&lang=pt_br&appid=0aad4dc5d102cc7af8c27b47c08a7885`

  try {
    const response = await axios.get(urlGetCity);
    const data = response.data;
    const weatherData = await getWeather(data[0].name);
    return weatherData;
  } catch (error) {
    toast.error(`Error fetching current city weather: ${error}`);
    throw error;
  }
}

export async function getWeatherHourlyForecast({ latitude, longitude }: GetWeatherCurrentCityProps) {
  const url = `${urlWeather}onecall?lat=${latitude}&lon=${longitude}&exclude=minutely,daily,alerts,current&units=metric&appid=1fa9ff4126d95b8db54f3897a208e91c`

  try {
    const response = await axios.get(url)
    return response.data
  } catch (error) {
    toast.error(`Error fetching current city weather: ${error}`);
    throw error;
  }
}

export async function getWeatherDailyForecast({ latitude, longitude }: GetWeatherCurrentCityProps) {
  const url = `${urlWeather}onecall?lat=${latitude}&lon=${longitude}&exclude=minutely,hourly,alerts,current&units=metric&appid=1fa9ff4126d95b8db54f3897a208e91c`

  try {
    const response = await axios.get(url)
    return response.data
  } catch (error) {
    toast.error(`Error fetching current city weather: ${error}`);
    throw error;
  }
}

export async function getOptinsWeatherCity(city: string) {
  const url = `${urlCity}direct?q=${city}&limit=5&appid=0aad4dc5d102cc7af8c27b47c08a7885`

  try {
    const response = await axios.get(url);
    return response.data
  } catch (error) {
    toast.error(`Erro: ${error}`)
    console.log(error)
  }
}