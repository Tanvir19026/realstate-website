import React from 'react';
import image1 from '../../images/graphic-home-loans.jpg';
import image2 from '../../images/graphic-property-inspection.jpg';
import image3 from '../../images/graphic-legal-services.jpg';
import image4 from '../../images/graphic-vastu.jpg';
import ServicesDataShow from './ServicesDataShow';

const Services = () => {
    const servicesData=[{
        name:'Home Loans',
        Photo:image1,
        text:'View and compare your best offers and apply'
    },
    {
        name:'Home Inspection',
        Photo:image2,
        text:'Make sure you are getting what your builder promised'
    },
    {
        name:'Legal Services',
        Photo:image3,
        text:'Get expert legal help for all property related matters'
    },
    {
        name:'Vastu',
        Photo:image4,
        text:'Consult best vastu expert for your office/Home'
    },
    ]
    return (
        <div className="row m-5">
            <h3>Property Services</h3>
            <hr style={{color:'red',border:'solid 5px red'}}></hr>
            {
                servicesData.map((sdata)=><ServicesDataShow sdata={sdata}></ServicesDataShow>)
            }
            
        </div>
    );
};

export default Services;