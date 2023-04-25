import ReactAnimatedWeather from "react-animated-weather";

import { ICON_MAP } from "../../assets/Constants";

import "./WeatherIcon.css";

type WeatherIconProps = {
  code: string;
  size: number;
};

const WeatherIcon = ({ code, size }: WeatherIconProps) => {
  return (
    <ReactAnimatedWeather
      icon={ ICON_MAP[code] }
      color="#f5f5f5"
      size={ size }
      animate={ true }
    />
  );
}

export default WeatherIcon;
