import React, { Component } from 'react';
import SearchBar from './components/SearchBar';
import DayCard from './components/DayCard';
import DayDetail from './components/DayDetail';
import { Container, Row, Col } from "reactstrap";
import sampleData from './data/sample.json';

class App extends Component {
  state = {
    days: sampleData.data,

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
