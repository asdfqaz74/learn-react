import './style.css';
import Celsius from './Celsius';
import Comparison from './Comparison';
import IconWeather from './IconWeather';

function Weather() {
  return (
    <article className="widget widget__weather">
      <h2 className="sr-only">날씨</h2>
      <IconWeather />
      <div className="weather__info" role="group">
        <Celsius />
        <Comparison />
      </div>
    </article>
  );
}

export default Weather;
