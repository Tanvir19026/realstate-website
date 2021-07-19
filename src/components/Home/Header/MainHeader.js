import React from "react";
import sidepic from "../../../images/download (2).jpeg";

import { FaLocationArrow, FaHome, FaDollarSign,FaSearch } from "react-icons/fa";
import { Nav, NavDropdown } from "react-bootstrap";
import './MainHeader.css'


const MainHeader = () => {
    const styleIcon = { marginTop: "12px", padding: '5px', display: "flex", margin: '10px', borderRadius:'8px',marginRight:'10px',color: 'white'}
    
    return (
        <div className="row mt-5 upperSection" style={{marginLeft: '40px'}}>

            <div className="col-md-9 mt-5" style={{color:'white'}} >
                <h2 >Are you looking for a Home?</h2>
                <h3 >You are in right place.</h3>
                <br />
                <div
                    style={{
                        border: "1px solid grey",
                        borderRadius: "20px",
                        width: "100%",
                        height: "35%",
                        display: "flex",
                        backgroundColor:'grey'
                    }}
                >
                    <div style={styleIcon}>
                        <FaLocationArrow  style={{marginTop:'10px'}}/>
                        <input type="text" placeholder="City" style={{borderRadius:'8px',padding:'10px',margin:'10px'}} />
                    </div>
                    <div style={styleIcon} >
                        <FaHome style={{marginTop:'10px'}} />
                        <Nav>
                            <h5 style={{ display: 'flex', padding: '5px' }}>property Type</h5>
                            <NavDropdown classtitle="property Type" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />

                            </NavDropdown>
                        </Nav>
                    </div>
                    <div style={styleIcon}>
                        <FaDollarSign style={{marginTop:'10px'}} />
                        <Nav className="me-auto">
                            <h5 style={{ display: 'flex', padding: '5px' }}>Budget</h5>
                            <NavDropdown classtitle="Budget" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />

                            </NavDropdown>
                        </Nav>
                    </div>
                    <div style={styleIcon} className="bg-dark">
                    <FaSearch style={{marginTop:'10px',color:"white"}}/>
                     <input type="text" style={{borderRadius:'8px',padding:'10px',margin:'10px'}}placeholder="Search"/>
                    </div>

                </div>
            </div>

            <div className="col-md-3 mt-5" >
                <img src={sidepic} alt="" style={{borderRadius:'8px'}} />
            </div>
        </div>
    );
};

export default MainHeader;
