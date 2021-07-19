import React from 'react';
import image from '../../images/photo-1560184897-ae75f418493e.jpeg';
import image1 from '../../images/photo-1592928302636-c83cf1e1c887.jpeg';
import image2 from '../../images/photo-1516455590571-18256e5bb9ff.jpeg';
import image3 from '../../images/photo-1560185007-5f0bb1866cab.jpeg';
import PropertyDataShow from '../PropertyDataShow/PropertyDataShow';


const PropertyShow = () => {
    const propertyData=
[{
    name:'Verified Properties',
    image:image,
    list:1414
},
{
    name:'Upcoming Projects',
    image:image1,
    list:2020
},
{
    name:'Individual Villas/House',
    image:image2,
    list:1714
},
{
    name:'Luxurious Properties',
    image:image3,
    list:1984
},
]
    return (
        <div className=" row mt-5 m-5">
            <h3>We've got properties for everyone</h3>
            
            
                {
                  propertyData.map((data)=><PropertyDataShow data={data}></PropertyDataShow>)
                }
          
           
            
        </div>
    );
};

export default PropertyShow;