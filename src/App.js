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

  }
  componentDidMount() {
    console.log(this.state.days[0]);
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
                temp={day.temp}
                high={day.max_temp}
                low={day.min_temp}
                precip={day.pop}
                day={moment(day.datetime, "YYYY-MM-DD").format("dddd")}
                icon={day.weather.icon}
                description={day.weather.description}
              />
            )
          )}
        </Row>
        <Row>
          <DayDetail></DayDetail>
        </Row>
      </Container>
    );
  }
}

export default App;
