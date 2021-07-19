import React from 'react';
import {Card} from 'react-bootstrap';
import {FaArrowCircleRight} from "react-icons/fa"
import { Link } from 'react-router-dom';
const PropertyDataShow = (props) => {
    const {name,image,list} = props.data;

    return (
        

<Card className="bg-white text-white col-md-3" style={{padding: '3px',marginTop: '40px'}}>

  <Card.Img src={image} alt="Card image" />
  <Card.ImgOverlay>
    <Card.Title><b>{name}</b></Card.Title>
    <Card.Text style={{color:'red'}}>
     <strong>{list}</strong> 
    </Card.Text>
   <b> <Link style={{textDecoration:'none',color:'white'}}>Explore <FaArrowCircleRight/></Link></b>
  </Card.ImgOverlay>
</Card>



    );
};

export default PropertyDataShow;