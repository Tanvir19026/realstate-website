import React from 'react';
import fullIamge from '../../images/img.jpg'

const ProjectGallery = () => {
    return (
        <div className="row m-5">
            <div className="col-md-12 mt-4">
            <h2 >Project Gallery</h2>
            <hr style={{color:'blue',border:'solid 5px blue'}}></hr>
            <img className="mt-5" src={fullIamge} alt="" />
            <button style={{backgroundColor:'black',color:'white',padding:'5px'}}>See Details </button>
            </div>
        </div>
    );
};

export default ProjectGallery;