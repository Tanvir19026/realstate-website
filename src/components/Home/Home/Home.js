import React from 'react';
import FeaturedProject from '../../FeaturedProject/FeaturedProject';
import ProjectGallery from '../../ProjectGallery/ProjectGallery';
import PropertyShow from '../../PropertyShow/PropertyShow';
import Services from '../../Services/Services';

import MainHeader from '../Header/MainHeader';
import NavBar from '../Header/NavBar';



const Home = () => {
    return (
        <div>
            <NavBar></NavBar>
            <MainHeader></MainHeader>
            <PropertyShow></PropertyShow>
            <ProjectGallery></ProjectGallery>
            <FeaturedProject></FeaturedProject>
            <Services></Services>
        </div>
    );
};

export default Home;