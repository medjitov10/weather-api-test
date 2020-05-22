import React from 'react';
import {CurrentCity} from './CurrentCity.js';
import {connect} from 'react-redux';
import {getWeather} from './../actions/weather';

class App extends React.Component {

  state = {
    city: "",
    currentCity: null,
    currentDate: null
  }
  onCityChange(e) {
    this.setState({city: e.target.value});
  }

  onSubmitClick() {
    this.props.getWeather(this.state.city);
  }

  onDateClick(index) {
    this.setState({currentDate: index});
  }

  render() {
    const {currentCity, currentDate} = this.props;

    return (
      <div>
        <h2>Weather App</h2>
        <label>Enter City</label>
        <input onChange={ (e) => this.onCityChange(e) }/>
        <button onClick={ () => this.onSubmitClick() }>Submit</button>
        {
          currentCity && currentCity.forecast
          && <CurrentCity onDateClick={this.onDateClick.bind(this)} currentCity={currentCity} currentDate={currentDate}/>
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentCity: state.CityWeather.currentCity,
    currentDate: state.CityWeather.currentDate
  };
}

export default connect(mapStateToProps, {getWeather})(App);
