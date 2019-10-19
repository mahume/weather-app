import React, { Component } from 'react';
import { Container, Row, Col } from "reactstrap";
import moment from 'moment';
import SearchBar from './components/SearchBar';
import DayCard from './components/DayCard';
import DayDetail from './components/DayDetail';
// import sampleData from '../data/sample.json';
import API from './utils/API';

class App extends Component {
  state = {
    days: [],
    // days: sampleData.data,
    selectedDay: null,
    searchedLocation: '',
  }
  componentDidMount() {
    this.getWeather('Denver, CO');
  }
  getWeather = location => {
    API.getWeather(location)
      .then(res => {
        console.log(res);
        this.setState({ 
          days: res.data.data,
          searchedLocation: `${res.data.city_name}, ${res.data.state_code}`
        })
      })
      .catch(err => console.log(err))
  }
  selectDay = day => {
    this.setState({ selectedDay: day })
  }
  render() {
    return (
      <Container>
        <Row>
          <Col md={7}>
            <h1>Weather for location</h1>
          </Col>
          <Col md={5}>
            <SearchBar></SearchBar>
          </Col>
        </Row>
        <Row>
          {this.state.days.map(day => (
              <DayCard 
                key={day.ts} 
                current={day.temp}
                high={day.max_temp}
                low={day.min_temp}
                precipitation={day.pop}
                day={moment(day.datetime, "YYYY-MM-DD").format("dddd")}
                icon={day.weather.icon}
                description={day.weather.description}
                selectDay={() => this.selectDay(day)}
                isActive={this.state.selectedDay === day}
              />
            )
          )}
        </Row>
        <Row>
          <Col>
            {this.state.selectedDay 
              ? (
                <DayDetail 
                  current={this.state.selectedDay.temp}
                  high={this.state.selectedDay.max_temp}
                  low={this.state.selectedDay.min_temp}
                  precipitation={this.state.selectedDay.pop}
                  day={moment(this.state.selectedDay.datetime, "YYYY-MM-DD").format("MMMM Do, YYYY")}
                  icon={this.state.selectedDay.weather.icon}
                  description={this.state.selectedDay.weather.description}
                />
              )
              : (
                <h2>Choose a day about for more details</h2>
              )
            }
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
