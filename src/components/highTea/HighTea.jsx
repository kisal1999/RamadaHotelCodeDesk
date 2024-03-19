import React from 'react';
import './HighTea.css';
import '../Home.css';

import highTeaImage from '../assests/highTeaImage.png';
import { Grid } from '@material-ui/core'

import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const HighTea = () => {
    return (
        <Grid container className="highTeaContainer">
            <Grid item xs={12}>
                <p className='redSmallTopic'>High Tea</p>
            </Grid>
            <Grid item xs={12} md={12} lg={6} className='highTeaImageStyle'>
                <img src={highTeaImage} alt="View" className='highTeaImage' />
            </Grid>
            <Grid item xs={12} md={12} lg={6}>
                <div className='highTeaDescription'>
                    <div>
                        <p className='greyBigTopic'>
                            The Ramada Colombo’s high tea buffe
                        </p >
                        <p className='paraHighTeaText' >
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet accusamus, doloribus deserunt
                            aspernatur, ex harum quo, pariatur illo consequuntur mollitia fugit quam sapiente corrupti
                            voluptatum officiis molestias voluptates asperiores consequatur. Lorem ipsum dolor sit amet
                            consectetur adipisicing elit. Nemo dolore odit aut, perferendis soluta quaerat voluptatibus
                            atque delectus vel pariatur nulla debitis odio molestiae enim vero, incidunt natus quod nam.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo iusto, adipisci voluptates
                            quae obcaecati commodi numquam eius, sed ut asperiores repellat impedit aspernatur alias? Ipsa
                        </p>
                    </div>
                    <p className='exploreRamadaHighTea'>
                        Explore Ramada High tea <ArrowForwardIcon style={{ verticalAlign: 'middle' }} />
                    </p>
                </div>
            </Grid>

        </Grid>
    );
};

export default HighTea;