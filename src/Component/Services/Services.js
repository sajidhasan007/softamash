import { Container, Grid } from '@mui/material';
import React from 'react';
import service1 from '../../images/icons/service1.png';
import service2 from '../../images/icons/service2.png';
import service3 from '../../images/icons/service3.png';
import service4 from '../../images/icons/service4.png';
import Service from '../Service/Service';
import './Services.css';
const Services = () => {
    const services = [
        { name: "Graphic Design", img: { service1 }, description: 'Graphic design is a craft where professionals create visual content to communicate messages. By applying visual hierarchy and page layout techniques, designers use typography and pictures to meet users specific needs and focus on the logic of displaying elements in interactive designs, to optimize the user experience.' },
        { name: "Web and Mobile Design", img: { service2 }, description: 'Graphic design is a craft where professionals create visual content to communicate messages. By applying visual hierarchy and page layout techniques, designers use typography and pictures to meet users specific needs and focus on the logic of displaying elements in interactive designs, to optimize the user experience.' },
        { name: "Web Development", img: { service3 }, description: 'Graphic design is a craft where professionals create visual content to communicate messages. By applying visual hierarchy and page layout techniques, designers use typography and pictures to meet users specific needs and focus on the logic of displaying elements in interactive designs, to optimize the user experience.' }
    ];
    return (
        <Container>
            <div>
                <h1>Provide Awesome <span className="special-name">Services</span></h1>
                <Grid container spacing={2}>
                    {/*  */}
                    {services.map(service => <Service service={service}></Service>)}
                </Grid>
            </div>
        </Container>
    );
};

export default Services;