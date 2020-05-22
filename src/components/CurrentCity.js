import React from 'react';
import {Link} from "react-router-dom";

import {DayInfo} from './DayInfo';
import {Date} from './Date';
import {CityAndTime} from './CityAndTime';
import {Temprature} from './Temprature';


export const CurrentCity = ({currentCity, currentDate, onDateClick }) => {
  const currentForecast = currentCity.forecast[0];
  console.log(currentForecast);
  return (
    <div>
      <hr/>
      <CityAndTime name={currentCity.name} time={currentForecast.Time} />
      <Date date={currentForecast.Date}/>
      <Temprature temprature={currentForecast.temprature}/>

      <Link to="/5day">5 Day Weather</Link>
    </div>
  )
}
