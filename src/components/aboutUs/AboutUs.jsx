import React from 'react';
import './AboutUs.css';
import '../Home.css';

import aboutUsImage from '../assests/aboutUsImage.png';
import { Grid } from '@material-ui/core'

import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const AboutUs = () => {
    return (
        <Grid container className="aboutUsContainer">
            <Grid item xs={12} md={12} lg={6}>
                <p className='redSmallTopic'>About Us</p>
                <p className='greyBigTopic'>
                    Explore More About Us
                </p >
                <div className='aboutDescription'>
                    <p className='paraText' >
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet accusamus, doloribus deserunt
                        aspernatur, ex harum quo, pariatur illo consequuntur mollitia fugit quam sapiente corrupti
                        voluptatum officiis molestias voluptates asperiores consequatur. Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Nemo dolore odit aut, perferendis soluta quaerat voluptatibus
                        atque delectus vel pariatur nulla debitis odio molestiae enim vero, incidunt natus quod nam.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo iusto, adipisci voluptates
                        quae obcaecati commodi numquam eius, sed ut asperiores repellat impedit aspernatur alias? Ipsa
                    </p>
                    <p className='paraText'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet accusamus, doloribus deserunt
                        aspernatur, ex harum quo, pariatur illo consequuntur mollitia fugit quam sapiente corrupti
                        voluptatum officiis molestias voluptates asperiores consequatur. Lorem ipsum dolor sit amet
                    </p>
                </div>
                <p className='learnMoreLink'>
                    Learn More <ArrowForwardIcon style={{ verticalAlign: 'middle' }} />
                </p>

            </Grid>
            <Grid item xs={12} md={12} lg={6}className='aboutUsImageStyle'>
                <img src={aboutUsImage} alt="View" className='aboutUsImage'/>
            </Grid>
        </Grid>
    );
};

export default AboutUs;