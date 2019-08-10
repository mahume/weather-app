import React from 'react';
import { Card, CardHeader, CardBody, Col } from "reactstrap";
import styled from 'styled-components';

const CardWrapper = styled.div`
  h3 {
    font-weight: 900;
  }
  img {
    width: 75px;
  }
  .card {
    border: ${props => props.isActive ? '2px solid blue' : '2px solid gray'};
    cursor: pointer;
    text-align: center;
  }
  .card-header {
    background: ${props => props.isActive ? 'blue' : null};
    color: ${props => props.isActive ? 'white' : null};
  }
  :hover {
    .card {
      border: 2px solid blue;

    }
  }
`

const DayCard = props => {
  const { 
    current, 
    high, 
    low, 
    precipitation, 
    day, 
    icon, 
    description, 
    selectDay,
    isActive,
  } = props;

  return (
    <Col>
      <CardWrapper
        onClick={selectDay}
        isActive={isActive}
      >
        <Card>
          <CardHeader>{day}</CardHeader>
          <CardBody>
            <h3>{current.toFixed(1)}°</h3>
            <p>
              <img src={`${process.env.PUBLIC_URL}/icons/${icon}.png`} alt={description} />
            </p>
            <p><strong>High:</strong>{Math.round(high)}°</p>
            <p><strong>Low:</strong>{Math.round(low)}°</p>
            <p><strong>Rain:</strong>{precipitation}%</p>
          </CardBody>
        </Card>
      </CardWrapper>
    </Col>
  )
}

export default DayCard;
