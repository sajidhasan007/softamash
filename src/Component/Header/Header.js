import { Button, Container, Grid } from '@mui/material';
import React, { useEffect } from 'react';
//import Navbar from '../Navber/Navber';
import Navber from '../Navber/Navber';
import bannerimg from '../../images/logos/Frame.png';
import logo1 from '../../images/logos/airbnb.png';
import logo2 from '../../images/logos/google.png';
import logo3 from '../../images/logos/netflix.png';
import logo4 from '../../images/logos/uber.png';
import logo5 from '../../images/logos/slack.png';

import './Header.css';


const Header = () => {

    useEffect(() => {
        document.title = "About Page";
    }, []);


    return (
        <div className='main'>

            <div className='header hero'>
                <Navber></Navber>
                <Grid container spacing={2} className='banner-content'>
                    <Grid item xs={12} md={6}>
                        <h1>Let's Grow Your Brand to The Next Level</h1>
                        <p>We are commited to give you better service. Our team is always redy to serve you if if you feel we are eligible for your work please let us know</p>
                        <Button variant="contained">Hire Us</Button>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <div >
                            <img className='banner-image' src={bannerimg} alt="" />
                        </div>

                    </Grid>

                </Grid>
                {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -25 1300 319">
                    <path fill="#ffff" fill-opacity="1" d="M0,288L120,272C240,256,480,224,720,186.7C960,149,1200,107,1320,85.3L1440,64L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path>
                </svg> */}

            </div>
            <Container>
                <div className='company-name'>
                    <img src={logo1} alt="" />
                    <img src={logo2} alt="" />
                    <img src={logo3} alt="" />
                    <img src={logo4} alt="" />
                    <img src={logo5} alt="" />
                </div>
            </Container>
        </div>
    );
};

export default Header;