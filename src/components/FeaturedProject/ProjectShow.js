import React from 'react';
import { Card } from 'react-bootstrap';

const ProjectShow = (props) => {
    const { image, companyLogo, CompanyName, price, flatName, SponserName, place, MerketedBy } = props.pdata;
    return (
        <Card style={{ width: '38rem', color: 'blue', margin: '8px', padding: '5px', borderRadius: '15px' }} className="m-3">
            <Card.Img variant="top" src={image} />

            <div className="d-flex">
                <Card.Body style={{ color: 'white', backgroundColor: 'white', display: 'flex' }}>
                    <Card.Title style={{ color: 'grey', fontWeight: '600',margin:'10px',padding: '15px'}}>{companyLogo}</Card.Title>
                    <div className="d-flex">
                    <Card.Text style={{ color: 'black' }}>
                        <div className="d-flex">
                        <div>
                            <p>{CompanyName}</p>
                            <p>{SponserName}</p>
                            <p>{place}</p>
                            <p>{MerketedBy}</p>
                        </div>
                        <div >
                            <p>{flatName}</p>
                            <p><strong>{price}</strong>Lac onwards</p>
                            <button style={{borderRadius:'8px',border:'1px solid black',backgroundColor:'red',padding:'5px',margin:'5px'}}>View Details</button>
                            
                            
                        </div>

                        </div>
                    </Card.Text>
                    </div>
                </Card.Body>
            </div>

        </Card>
    );
};

export default ProjectShow;