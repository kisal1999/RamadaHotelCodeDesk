import React from 'react';
import './NavigationBar.css';
import companyLogo from '../assests/ramadaLogo.png';
import { Grid, Button } from '@material-ui/core'


const NavigationBar = () => {
    return (
        <Grid container className="mainContainer">
            <Grid item xs={3}>
                <div className="logo-container">
                    <img src={companyLogo} alt="Ramada Logo" className="logo" />
                </div>
            </Grid>
            <Grid item xs={6} className="navbar">
                <nav>
                    <ul className="nav-list">
                        <li><a href="#">Accommodation</a></li>
                        <li><a href="#">Restaurants</a></li>
                        <li><a href="#">Banquets</a></li>
                        <li><a href="#">Amenities</a></li>
                        <li><a href="#">Explore Us</a></li>
                        <li><a href="#">Delivery</a></li>
                    </ul>
                </nav>
            </Grid>
            <Grid container item xs={3} className="button-container">
                <Button>
                    Contact
                </Button>
            </Grid>
        </Grid>
    );
};

export default NavigationBar;