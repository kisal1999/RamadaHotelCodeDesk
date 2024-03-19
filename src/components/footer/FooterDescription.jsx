import React from 'react';

import { Grid } from '@material-ui/core'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

import './Footer.css';
import '../Home.css';

const Footer = () => {
    return (
        <Grid container >
            <Grid item xs={12} className="textContainer">
                <p className='footerTopic'>
                    RAMADA BY WYNDHAM COLOMBO
                </p>
            </Grid>
            <Grid item xs={12} className="textContainer">
                <p className='footerTopicDetails'>
                    Owned and managed by Alhambra HotelsLtd, under
                    license from Ramada Worldwide
                </p>
            </Grid>
            <Grid item xs={12} className="textContainer">
                <p className='footerTopicDetails'>
                    30, Sir Mohamed Macan Markar Mawatha,Colombo 03, Sri Lanka
                </p>
            </Grid>
            <Grid container xs={12} className="textContainer">
                <Grid item xs={12}>
                    <p className='footerTopicDetailsNumberFirst'>
                        T: +94 11-242 2001
                    </p>
                </Grid>
                <Grid item xs={12}>
                    <p className='footerTopicDetailsNumberRest'>
                        F&B Hotline : +94 76 6645507
                    </p>
                </Grid>
                <Grid item xs={12}>
                    <p className='footerTopicDetailsNumberRest'>
                        F: +94 11-244 7977
                    </p>
                </Grid>
                <Grid item xs={12}>
                    <p className='footerTopicDetailsNumberRest'>
                        info@ramadacolombo.com
                    </p>
                </Grid>
                <Grid item xs={12}>
                    <div className="socialIcons">
                        <div className="iconCircle">
                            <FontAwesomeIcon icon={faFacebookF} className="socialIconsEach" />
                        </div>
                        <div className="iconCircle">
                            <FontAwesomeIcon icon={faInstagram} className="socialIconsEach" />
                        </div>
                        <div className="iconCircle">
                            <FontAwesomeIcon icon={faTwitter} className="socialIconsEach" />
                        </div>
                    </div>
                </Grid>
            </Grid>
        </Grid >
    );
};

export default Footer;