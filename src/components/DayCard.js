import React from 'react';
import { Card, CardHeader, CardBody, Col } from "reactstrap";


const DayCard = props => {
  const { key, current, temp, high, low, precip, day, icon, description } = props;
  return (
    <Col>
      <Card>
        <CardHeader>{day}°</CardHeader>
        <CardBody>
          <h3>{temp.toFixed(1)}</h3>
          <p>
            <img src={`${process.env.PUBLIC_URL}/icons/${icon}.png`} alt={description} />
          </p>
        </CardBody>
      </Card>
    </Col>
  )
}

export default DayCard;
