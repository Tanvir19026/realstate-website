import React from 'react';
import {Card} from 'react-bootstrap';
import {FaArrowCircleRight} from "react-icons/fa"
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
    <button style={{backgroundColor:'white',color:'grey'}}>Explore <FaArrowCircleRight/></button>
  </Card.ImgOverlay>
</Card>



    );
};

export default PropertyDataShow;