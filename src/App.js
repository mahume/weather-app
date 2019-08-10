import React, { Component } from 'react';
import SearchBar from './components/SearchBar';
import DayCard from './components/DayCard';
import DayDetail from './components/DayDetail';
import { Container, Row, Col } from "reactstrap";
import sampleData from './data/sample.json';
import moment from 'moment';

class App extends Component {
  state = {
    days: sampleData.data,
    selectedDay: null,
  }
  componentDidMount() {}
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
