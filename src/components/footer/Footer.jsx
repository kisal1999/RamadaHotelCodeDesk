import React from 'react';

import './Footer.css';
import '../Home.css';

import FooterDescription from './FooterDescription';

import companyLogo from '../assests/ramadaLogo.png';

import { Grid } from '@material-ui/core'
import QuickLinks from './QuickLinks';
import FooterImages from './FooterImages';

const Footer = () => {
    return (
        <div className="footerContainer">
            <Grid container>
                <Grid item xs={12} className="logoContainer">
                    <img src={companyLogo} alt="Ramada Logo" className="logo" />
                </Grid>
                <Grid item xs={12} className="inputContainer">
                    <div className='inputWithButton'>
                        <input type="text" placeholder='Enter Your Email Here' />
                        <button type="submit">Get in Touch</button>
                    </div>
                </Grid>

            </Grid>
            <Grid container xs={12} spacing={3} className='footerDescriptionContainer'>
                <Grid item xs={4} >
                    <FooterDescription />
                </Grid>
                <Grid item xs={4} >
                    <QuickLinks />
                </Grid>
                <Grid item xs={4} >
                    <FooterImages />
                </Grid>
                <Grid item xs={12} className="navbarFooter">
                    <nav>
                        <ul className="nav-listFooter">
                            <li><a href="#">Support</a></li>
                            <li><a href="#">Privacy policy</a></li>
                            <li><a href="#">Terms and Conditions</a></li>
                        </ul>
                    </nav>
                </Grid>
            </Grid>
            <Grid container xs={12}  className='footerDescriptionContainerRights'>
                <Grid item xs={12} className="navbarFooterRights">
                    <p>
                        © 2023 Code Desk , All Right Receved.
                    </p>
                </Grid>
            </Grid>

        </div>
    );
};

export default Footer;