import React from 'react';
import img1 from '../../images/img (1).jpg';
import img2 from '../../images/img (2).jpg'
import ProjectShow from './ProjectShow';

const FeaturedProject = () => {
    const projectData=[{
        image:img1,
        companyLogo:'D-Ornate',
        CompanyName:'D-Ornate',
        price:82,
        flatName:'2,3 BHK Flats',
        SponserName:'by Gorani Group',
        place:'Kesharberg,Indore',
        MerketedBy:'Merketed By Gorani Group '

    },
    {
        image:img2,
        companyLogo:'Uktal-Greenix',
        CompanyName:'AMJ Global Homes LLP',
        price:92,
        flatName:'2,3 BHK Flats',
        SponserName:'by AMJ Global Homes LLP',
        place:'Sundurpada,Bhubaneshwar',
        MerketedBy:'Merketed by AMJ Global Homes LLP'

    }]
    return (
        <div className="row m-4">
            <div className="m-3">
            <h3>Featured Projects</h3>
            <hr style={{color:'green',border:'solid 5px green'}}></hr>
            </div>
            
            {
                projectData.map((pdata)=><ProjectShow pdata={pdata}></ProjectShow>)
            }
            
        </div>
    );
};

export default FeaturedProject;