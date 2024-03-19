import React from 'react';

import { Grid } from '@material-ui/core'

import './Footer.css';
import '../Home.css';

import footerImage1 from '../assests/footerImage1.png';
import footerImage2 from '../assests/footerImage2.png';
import footerImage3 from '../assests/footerImage3.png';

const FooterImages = () => {
    return (
        <Grid container className='imageFooterContainer'>
            <Grid item xs={6} className="footerLogoContainerEach" >
                <img src={footerImage3} alt="WYNDHAM Rewards" className="footerLogo" />
            </Grid>
            <Grid item xs={6} className="footerLogoContainerEach" >
                <img src={footerImage1} alt="Travelers Voice " className="footerLogo" />
            </Grid>
            <Grid item xs={12} className="footerLogoContainerEach" >
                <img src={footerImage2} alt="WYNDHAM Green" className="footerLogo" />
            </Grid>
        </Grid >
    );
};

export default FooterImages;