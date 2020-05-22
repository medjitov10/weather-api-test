import { combineReducers } from 'redux';
import {CityWeatherReducer} from './CityWeatherReducer';

const rootReducer = combineReducers({
  CityWeather: CityWeatherReducer,
});

export default rootReducer;
