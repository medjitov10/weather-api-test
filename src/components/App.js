import React from 'react';
import logo from './logo.svg';
import './App.css';
const data = {
"States": {
  "IL": {
    "currentdate": "04/05/2019",
    "time": "02:59 PM",
    "cities": [{
        "name": "Chicago",
        "forecast": [{
            "Date": "04/05/2019",
            "Time": "2.59pm",
            "temprature": 47,
            "feels": 40
          },
          {
            "Date": "04/06/2019",
            "Time": "2.59pm",
            "temprature": 57,
            "feels": 55
          },
          {
            "Date": "04/07/2019",
            "Time": "2.59pm",
            "temprature": 45,
            "feels": 44
          },
          {
            "Date": "04/08/2019",
            "Time": "2.59pm",
            "temprature": 61,
            "feels": 50
          },
          {
            "Date": "04/09/2019",
            "Time": "2.59pm",
            "temprature": 68,
            "feels": 65
          }
        ]
      },
      {
        "name": "Naperville",
        "forecast": [{
            "Date": "04/05/2019",
            "Time": "2.59pm",
            "temprature": 47,
            "feels": 40
          },
          {
            "Date": "04/06/2019",
            "Time": "2.59pm",
            "temprature": 59,
            "feels": 54
          },
          {
            "Date": "04/07/2019",
            "Time": "2.59pm",
            "temprature": 47,
            "feels": 46
          },
          {
            "Date": "04/08/2019",
            "Time": "2.59pm",
            "temprature": 63,
            "feels": 62
          },
          {
            "Date": "04/09/2019",
            "Time": "2.59pm",
            "temprature": 70,
            "feels": 68
          }
        ]
      }
    ]
  },
  "NY": {
    "currentdate": "04/05/2019",
    "time": "02:59 PM",
    "cities": [{
        "name": "New York",
        "forecast": [{
            "Date": "04/05/2019",
            "Time": "2.59pm",
            "temprature": 57,
            "feels": 50
          },
          {
            "Date": "04/06/2019",
            "Time": "2.59pm",
            "temprature": 67,
            "feels": 65
          },
          {
            "Date": "04/07/2019",
            "Time": "2.59pm",
            "temprature": 55,
            "feels": 54
          },
          {
            "Date": "04/08/2019",
            "Time": "2.59pm",
            "temprature": 71,
            "feels": 60
          },
          {
            "Date": "04/09/2019",
            "Time": "2.59pm",
            "temprature": 78,
            "feels": 75
          }
        ]
      },
      {
        "name": "Buffalo",
        "forecast": [{
            "Date": "04/05/2019",
            "Time": "2.59pm",
            "temprature": 58,
            "feels": 40
          },
          {
            "Date": "04/06/2019",
            "Time": "2.59pm",
            "temprature": 68,
            "feels": 64
          },
          {
            "Date": "04/07/2019",
            "Time": "2.59pm",
            "temprature": 57,
            "feels": 46
          },
          {
            "Date": "04/08/2019",
            "Time": "2.59pm",
            "temprature": 63,
            "feels": 62
          },
          {
            "Date": "04/09/2019",
            "Time": "2.59pm",
            "temprature": 40,
            "feels": 48
          }
        ]
      }
    ]
  },
  "CA": {
    "currentdate": "04/05/2019",
    "time": "02:59 PM",
    "cities": [{
        "name": "Los Angeles",
        "forecast": [{
            "Date": "04/05/2019",
            "Time": "2.59pm",
            "temprature": 67,
            "feels": 50
          },
          {
            "Date": "04/06/2019",
            "Time": "2.59pm",
            "temprature": 77,
            "feels": 65
          },
          {
            "Date": "04/07/2019",
            "Time": "2.59pm",
            "temprature": 65,
            "feels": 54
          },
          {
            "Date": "04/08/2019",
            "Time": "2.59pm",
            "temprature": 71,
            "feels": 60
          },
          {
            "Date": "04/09/2019",
            "Time": "2.59pm",
            "temprature": 78,
            "feels": 75
          }
        ]
      },
      {
        "name": "San francisco",
        "forecast": [{
            "Date": "04/05/2019",
            "Time": "2.59pm",
            "temprature": 68,
            "feels": 50
          },
          {
            "Date": "04/06/2019",
            "Time": "2.59pm",
            "temprature": 78,
            "feels": 64
          },
          {
            "Date": "04/07/2019",
            "Time": "2.59pm",
            "temprature": 67,
            "feels": 66
          },
          {
            "Date": "04/08/2019",
            "Time": "2.59pm",
            "temprature": 73,
            "feels": 72
          },
          {
            "Date": "04/09/2019",
            "Time": "2.59pm",
            "temprature": 70,
            "feels": 68
          }
        ]
      }
    ]
  }
}
}

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
    const states = Object.keys(data.States);

    for(let i = 0; i < states.length; i++) {
      const foundCity = data.States[states[i]].cities.find(city => {
        return city.name = this.state.city;
      })
      if(foundCity) {
        this.setState({currentCity: foundCity, currentDate: 0});
        break;
      }
    }

  }

  onDateClick(index) {

    this.setState({currentDate: index});
  }

  render() {
    const {currentCity, currentDate} = this.state;
    return (
      <div>
        <h2>Weather App</h2>
        {/* // <!--
        // •	Build form control with the following. Label : “Enter City”,
         Input form field, Submit Button.
         Button should be custom built and re-usable.
        // •	Build weather details component.
              It should show the current Date,
              City Name, Current time & temperature details.
              “Begin with Static Data and later bind with JSON dynamic data”
        // •	Retrieve weather data from JSON service (API). Use Redux Store for the Data management. Parse the content to respective UI components.
        // •	Weather Details should be updated based on the City name entered in the form control.
        // •	Build “5 Day Weather” Button by re-using the button component which was created earlier.
        // •	Implement new page which shows 5 day weather Details. Create an event to “5 Day Weather” button to take to 5 Day weather details page.
        // •	Enhance Weather details UI component. Component should be divided into 3 small re-usable components. Date Display, City & current time, Temperature. Show the Visual screen to the candidate
        // •	5 Day Weather details page should contain a data grid which shows the 5 day weather info. Temperature component should be reused and rendered in each cell. Show the visual design to the candidate.
        // --> */}
        <label>Enter City</label>
        <input onChange={ (e) => this.onCityChange(e) }/>
      <button onClick={ () => this.onSubmitClick() }>Submit</button>


      {
        currentCity ? <CurrentCity onDateClick={this.onDateClick.bind(this)} currentCity={currentCity} currentDate={currentDate}/> : null
      }

      </div>
    );
  }
}


const CurrentCity = ({currentCity, currentDate, onDateClick }) => {

  return (
    <div>
      <h4>City: {currentCity.name}</h4>

      {
        currentCity ? <DayInfo dayInfo={currentCity.forecast[currentDate]} onFocus={false} onDateClick={onDateClick}/> : null
      }
      <div style={{display: "flex", justifyContent: "space-between"}}>
        {
          currentCity.forecast.map((el, index) => (
            <DayInfo dayInfo={el} key={index} onFocus={index==currentDate} index={index} onDateClick={() => onDateClick(index)}/>
          ))
        }
      </div>
    </div>
  )
}

const DayInfo = (props) => {
  const {Date, Time, temprature, feels, index } = props.dayInfo;
  const style = props.onFocus ? {border: `1px solid black`} : {};

  return (
    <div style={style} onClick={() => props.onDateClick(props.index)}>
      <div>Date: {Date}</div>
      <div>Time: {Time}</div>
      <div>Temprature: {temprature}</div>
      <div>Feels: {feels}</div>
      <br/>
    </div>
  )
}

export default App;
