import React from 'react';
import { Link } from 'react-router-dom';
import {FaFacebook,FaYoutube,FaTwitter,FaLinkedin} from "react-icons/fa"

const Footer = () => {
    
    return (
        <div className="row m-5 mt-5 d-flex bg-primary p-5">
            <div className="col-md-6">
          <h5>About Real State</h5>
          <p>Launched in 2006, Magicbricks is India's No.1 online Property marketplace to buy, sell, and rent residential and commercial properties. Adjudged as the most preferred real estate portal in India by various independent surveys.</p>
          <div style={{padding:'20px',margin:'10px',fontSize:'30px'}}>
          <Link style={{padding:'10px',margin:'10px',color:'blue'}} to='/https://www.facebook.com/'><FaFacebook></FaFacebook></Link>
          <Link style={{padding:'10px',margin:'10px',color:'red'}} to='/https://www.youtube.com/'><FaYoutube></FaYoutube></Link>
          <Link  style={{padding:'10px',margin:'10px',color:'cyan'}} to='/https://www.twitter.com/'><FaTwitter></FaTwitter></Link>
          <Link style={{padding:'10px',margin:'10px',color:'white'}} to='/https://www.linkedin.com/'><FaLinkedin></FaLinkedin></Link>
          </div>
            </div>
            <div className="col-md-6">
             <h4>Real Estate in India</h4>
             <div className="bg-dark p-3"style={{borderRadius:'15px'}}   >
                
              <Link to='/'>Property in Delhi NCR Property in Mumbai Property in Chennai Property in Pune Property in Noida Property in Gurgaon Property in Bangalore Property in Ahmedabad</Link>
               
             </div>

             <h5>New Projects in India</h5>
             <div className="bg-dark p-3"style={{borderRadius:'15px'}}   >
                
                <Link to='/'>New Projects in Delhi/NCR New Projects in Mumbai New Projects in Chennai New Projects in Pune New Projects in Noida New Projects in Gurgaon New Projects in Bangalore New Projects in Ahmedabad</Link>
                 
               </div>
            </div>
            
        </div>
    );
};

export default Footer;