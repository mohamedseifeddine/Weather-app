import { useState , useEffect } from "react";
import {getCountryWeather} from '../../services'
import styles from "./Tile.module.scss";

const Tile = ({ info }:TileProps) =>  {
  
  const [weather,setWeather]=useState<weather>()
  useEffect(() => {
    if(info) 
      getCountryWeather(info[0],info[1]).then(res=>setWeather(res))        
  },[info]);
   
   return ( <div className={styles.tiles}>
      <h3 className={styles.tiles_title}>Tiles</h3>
      <div className={styles.tiles_indicators}>
        <div className={styles.tiles_indicators_confirmed}>
          <div className={styles.tiles_indicator}>
              <span className={styles.tiles_indicator_number}>
              Temperature 
              </span>
            <h4 className={styles.tiles_indicator_title}>
                Value {weather?.main?.temp}
            </h4>
            <h4 className={styles.tiles_indicator_title}>
              Minimum  {weather?.main?.temp_min} 
            </h4>
            <h4 className={styles.tiles_indicator_title}>
              Maximum {weather?.main?.temp_max}
            </h4>
          </div>
          <div className={styles.tiles_indicator}>
              <span className={styles.tiles_indicator_number}>
                Wind
              </span>
            <h4 className={styles.tiles_indicator_title}>
                Speed  {weather?.wind?.speed} 
            </h4>
            <h4 className={styles.tiles_indicator_title}>
              Direction  {weather?.wind?.deg} 
            </h4>
          </div>
          <div className={styles.tiles_indicator}> 
              <span className={styles.tiles_indicator_number}>
                Humidity
              </span>
            <h4 className={styles.tiles_indicator_title}>
              Value {weather?.main?.humidity} 
            </h4>
          </div>
          <div className={styles.tiles_indicator}>
          <span className={styles.tiles_indicator_number}>
              Pressure
              </span>
            <h4 className={styles.tiles_indicator_title}> 
              Value {weather?.main?.pressure} 
            </h4>
          </div>
        </div>
      </div>
    </div>
   )
}
type TileProps = {
  info: any 
}

type mainField = {
  temp: number;
  temp_min:number;
  temp_max:number;
  humidity:number;
  pressure:number;
};
type windField = {
  speed:number;
  deg:number;
}

interface weather  {
  main: mainField;
  wind:windField;
};






export default Tile;
