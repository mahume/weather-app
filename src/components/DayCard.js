import React from 'react';
import { Card, CardHeader, CardBody, Col } from "reactstrap";

const DayCard = (props) => {
  const { key, temp, high, low, precip, day, current } = props;
  return (
    <Col>
      <Card>
        <CardHeader>{day}°</CardHeader>
        <CardBody>
          <h3>{temp.toFixed(1)}</h3>
        </CardBody>
      </Card>
    </Col>
  )
}

export default DayCard;
