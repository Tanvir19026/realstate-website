import React from 'react';
import FeaturedProject from '../../FeaturedProject/FeaturedProject';
import Footer from '../../Footer/Footer,';
import ProjectGallery from '../../ProjectGallery/ProjectGallery';
import PropertyShow from '../../PropertyShow/PropertyShow';
import Services from '../../Services/Services';
import TopProject from '../../TopProject/TopProject';

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
            <TopProject></TopProject>
            <Footer></Footer>
        </div>
    );
};

export default Home;