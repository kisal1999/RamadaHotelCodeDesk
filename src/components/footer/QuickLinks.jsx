import React from 'react';

import { Grid } from '@material-ui/core'

import './Footer.css';
import '../Home.css';

const QuickLinks = () => {
    return (
        <Grid container >
            <Grid item xs={6}>
                <Grid item xs={12} className="textContainer">
                    <p className='footerTopicQuickLinks'>
                        Quick Links
                    </p>
                </Grid>
                <Grid item xs={12} className="textContainer">
                    <ul className="footerList">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Spa</a></li>
                        <li><a href="#">Overview</a></li>
                        <li><a href="#">Banquests</a></li>
                        <li><a href="#">Accommodation</a></li>
                        <li><a href="#">Facilities</a></li>
                        <li><a href="#">Attractions</a></li>
                        <li><a href="#">Wine & Dine</a></li>
                        <li><a href="#">Promotions</a></li>
                        <li><a href="#">Booking</a></li>
                    </ul>
                </Grid>
            </Grid>
            <Grid item xs={6}>
                <Grid item xs={12} className="textContainer">
                    <p className='footerTopicQuickLinks'>
                        Resources
                    </p>
                </Grid>
                <Grid item xs={12} className="textContainer">
                    <ul className="footerList">
                        <li><a href="#">Lorem Ipsum</a></li>
                        <li><a href="#">is simply dummy </a></li>
                        <li><a href="#">text of the </a></li>
                        <li><a href="#">printing and typesetting </a></li>
                        <li><a href="#">industry.</a></li>
                        <li><a href="#">Lorem Ipsum has </a></li>
                        <li><a href="#">been the industry's </a></li>
                    </ul>
                </Grid>
            </Grid>
        </Grid >
    );
};

export default QuickLinks;