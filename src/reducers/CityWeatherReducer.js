import {FETCH_WEATHER} from './../actions/weather';

const initialState = {
  currentCity: {},
  currentDate: 0,
};

export const CityWeatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_WEATHER:
      return {
        currentCity: action.payload,
        currentDate: 0
      };
  }
  return state;
}
