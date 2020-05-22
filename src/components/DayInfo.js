import React from 'react';

export const DayInfo = (props) => {
  const {Date, Time, temprature, feels, index } = props.dayInfo;

  return (
    <div>
      <div>Date: {Date}</div>
      <div>Time: {Time}</div>
      <div>Temprature: {temprature}</div>
      <div>Feels: {feels}</div>
      <br/>
    </div>
  )
}
