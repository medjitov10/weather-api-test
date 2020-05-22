import { API } from './api'

export const FETCH_WEATHER = 'FETCH_WEATHER';
export const getWeather = (city) => {

  const states = Object.keys(API.States);
  for(let i = 0; i < states.length; i++) {

    const foundCity = API.States[states[i]].cities.find(cityInfo => {
      return cityInfo.name == city;
    })

    if(foundCity) {
      return {
        type: FETCH_WEATHER,
        payload: foundCity
      }
      break;
    }
  }
  return {
    type: FETCH_WEATHER,
    payload: "No city in db"
  }
}
