import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {CityAndTime} from './CityAndTime';
import {DayInfo} from './DayInfo';

class FiveDayTemp extends React.Component {

  render() {
    const {city, forecast}  = this.props;
    return (
      <div>
        <CityAndTime name={city} time={forecast && forecast[0].Time}/>
        <br/>
        <div style={{display: "flex", justifyContent: "space-between"}}>
          {
            forecast && forecast.map((el, index) => (
              <DayInfo dayInfo={el} key={index} index={index}/>
            ))
          }
        </div>
        <Link to="/">Home</Link>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  console.log(state);
  return {
    forecast: state.CityWeather.currentCity.forecast,
    city: state.CityWeather.currentCity.name
  }
}

export default connect(mapStateToProps, {})(FiveDayTemp);
