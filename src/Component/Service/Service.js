import { Container, Grid } from '@mui/material';
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import service1 from '../../images/icons/service1.png';
import service2 from '../../images/icons/service2.png';
import service3 from '../../images/icons/service3.png';
import './Service.css';
import { NavLink } from 'react-router-dom';
const Service = ({ service }) => {
    const { name, img, description } = service;
    return (



        < Grid item xs={12} md={6} lg={4} >
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <img className='card-img' src={service2} alt="" />

                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid >



    );
};

export default Service;