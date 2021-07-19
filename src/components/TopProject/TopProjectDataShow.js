import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {FaArrowRight} from "react-icons/fa"
const TopProjectDataShow = (props) => {
    const{image,CompanyName,price,flatName,SponserName,place,MerketedBy}=props.TpData;
    return (
        <div className="col-md-3 mt-5">
     <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={image} />
  <Card.Body>
  <Card.Title>{flatName}</Card.Title>
    <Card.Title>{CompanyName}</Card.Title>
    <Card.Title>{place}</Card.Title>
    <Card.Text>
    <h4><strong>{price} Cr </strong>onwards</h4> 
    <h5>{MerketedBy}</h5>
    </Card.Text>
    <Card.Title>{SponserName}</Card.Title>
    <Link style={{textDecoration: 'none'}}>Details Here <FaArrowRight></FaArrowRight></Link>
  </Card.Body>
</Card>       
      


        </div>
    );
};

export default TopProjectDataShow;