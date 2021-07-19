import React from 'react';
import {Card,Button} from 'react-bootstrap';

const ServicesDataShow = (props) => {
    const {name,text,Photo}=props.sdata;
    return (
        <Card style={{ width: '18rem',margin: '10px',marginTop:'30px' }}>
  <Card.Img variant="top" src={Photo} />
  <Card.Body>
    <Card.Title>{name}</Card.Title>
    <Card.Text>
      {
          text
      }
    </Card.Text>
    <Button variant="primary">Details Here</Button>
  </Card.Body>
</Card>
    );
};

export default ServicesDataShow;