// import "./WeatherCard.css";
import styles from "./WeatherCard.module.css";


const WeatherCard = ({ data }) => {
  return (
    <div className={styles.weatherCard}>
     <h2>{data?.location?.name} {data?.location?.country}</h2>
      <br />
      <div className={styles.temp}>{data?.current?.temp_c}°C / {data?.current?.temp_f}°F</div>
      <br />
      <img src={data?.current?.condition?.icon} className="icon" alt="" />
      <div className="weather"> {data?.current?.condition?.text} </div>
      <div className="wind"> Wind: {data?.current?.wind_kph} KPH </div>
      <div className="degree"> Wind degree: {data?.current?.wind_degree} ° </div>
      <div className="direction"> Wind Direction: {data?.current?.wind_dir} </div>
      <div className="humidity"> Humidity: {data?.current?.humidity} % </div>
      <div className="Pressure"> Pressure: {data?.current?.pressure_mb} mb - {data?.current?.pressure_in} in</div>
      <div className="Feelslike"> Feelslike: {data?.current?.feelslike_c} ° </div>
      <div className="Visibility"> Visibility: {data?.current?.vis_km} km </div>
      <div className="Cloud"> Cloud: {data?.current?.cloud}% </div>
      <div className="gust"> Gust: {data?.current?.gust_mph} mph / {data?.current?.gust_kph} kph</div>
      <div className="last_updated"> Time Stamp: {data?.current?.last_updated} </div>
      
    </div>
  );
};

export default WeatherCard;