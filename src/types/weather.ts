export interface WeatherDataProps {
  coord: {
    lon: number;
    lat: number;
  };
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];
  base: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
    gust: number;
  };
  clouds: {
    all: number;
  };
  dt: number;
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

export interface WeatherGeralProps {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  description: string;
  icon: string;
  humidity: number;
  pressure: number;
  wind: {
    deg: number;
    gust: number;
    speed: number;
  }
  sunrise: number;
  sunset: number;
  name: string;
  country: string;
}

export interface HourlyForecastProps {
  lat: number;
  lon: number;
}

export interface GetWeatherCurrentCityProps {
  latitude: number;
  longitude: number;
}

export interface WeatherHourlyDataProps {
  lat: number;
  lon: number;
  timezone: string;
  timezone_offset: number;
  hourly?: {
      dt: number;
      temp: number;
      feels_like: number;
      pressure: number;
      humidity: number;
      dew_point: number;
      uvi: number;
      clouds: number;
      visibility: number;
      wind_speed: number;
      wind_deg: number;
      wind_gust: number;
      weather: {
          id: number;
          main: string;
          description: string;
          icon: string;
      }[];
      pop: number;
      rain?: {
          "1h": number;
      };
  }[];
  daily?: [
    {
      dt: number;
      sunrise: number;
      sunset: number;
      moonrise: number;
      moonset: number;
      moon_phase: number;
      temp: {
          day: number;
          min: number;
          max: number;
          night: number;
          eve: number;
          morn: number;
      };
      feels_like: {
          day: number;
          night: number;
          eve: number;
          morn: number;
      };
      pressure: number;
      humidity: number;
      dew_point: number;
      wind_speed: number;
      wind_deg: number;
      wind_gust: number;
      weather: {
          id: number;
          main: string;
          description: string;
          icon: string;
      }[];
      clouds: number;
      pop: number;
      rain?: number;
      uvi: number;
  }
  ]
}

export interface WeatherDataSingleProps {
  temp: number ;
  icon: string;
  day?: number;
  hour?: number;
}

export type WeatherOptionProps = {
  title?: string;
  local_names?: Record<string, string>;
  lat?: number;
  lon?: number;
  country: string;
  state: string;
}
