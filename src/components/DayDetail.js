import React from 'react';
import { Card, CardBody } from "reactstrap";
import styled from "styled-components";

const StyledCard = styled(Card)`
  text-align: center;
  h2 {
    color: violet;
  }
`

const DayDetail = props => {
  const {
    day,
    icon,
    description,
    high,
    low,
    precipitation,
  } = props;
  
  return (
    <Card>
      <CardBody>
        <h2>Day Detail for {day}</h2>
        <p>
          <img src={`${process.env.PUBLIC_URL}/icons/${icon}.png`} alt={description} />
        </p>
        <p><strong>High:</strong>{Math.round(high)}°</p>
        <p><strong>Low:</strong>{Math.round(low)}°</p>
        <p><strong>Chance of rain:</strong>{precipitation}%</p>
      </CardBody>
    </Card>
  )
}

export default DayDetail

