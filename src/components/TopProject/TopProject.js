import React from 'react';
import img1 from '../../images/img (3).jpg';
import img2 from '../../images/img (4).jpg';
import img3 from '../../images/img (5).jpg';
import img4  from '../../images/download.jpeg';
import TopProjectDataShow from './TopProjectDataShow';


const TopProject = () => {
    const topProjectData=[{
        image:img1,
        CompanyName:'Rishab Cloud 9 Towers',
        price:83.4,
        flatName:'3,4 BHK Flats',
        SponserName:'by Rishabh Group',
        place:'sec1,Vaishali,Ghaziabad',
        MerketedBy:'Merketed By Rishabh Group '
    },
    {
        image:img2,
    CompanyName:'Godrej Meredien',
    price:73.4,
    flatName:'3,4 BHK Flats',
    SponserName:'by Godrej Properties',
    place:'sector106,Goragaon',
    MerketedBy:'Merketed By Godrej Properties Group '
    },
    {
        image:img3,
    CompanyName:'Windchants',
    price:93.4,
    flatName:'3,4 BHK Flats',
    SponserName:'by Experion Developers',
    place:'sector112,Goragaon',
    MerketedBy:'Merketed By Experion Developers'
    },
    {
        image:img4,
        CompanyName:'The Harmitage',
        price:103.4,
        flatName:'3,4 BHK Flats',
        SponserName:'by Satya Developers',
        place:'sector172,Goragaon',
        MerketedBy:'Merketed By Satya Developers'
    }
]
    return (
        <div className="m-5 mt-5 row">
            <h3>Top Projects</h3>
            <hr style={{color:'yellow',border:'solid 5px yellow'}}></hr>
        {
            topProjectData.map((TpData)=><TopProjectDataShow TpData={TpData}></TopProjectDataShow>)
        }
        </div>
    );
};

export default TopProject;