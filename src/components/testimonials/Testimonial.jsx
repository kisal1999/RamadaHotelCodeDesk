import React from 'react';

import './Testimonial.css';
import { Grid } from '@material-ui/core'

import TestimonialCarousel from '../surfaces/testimonials/TestimonialCarousel';

const Testimonial = () => {
    return (
        <Grid container className="testimonialsContainer">
            <Grid item xs={12}>
                <p className='redTestimonialTopic'>Testimonials</p>
            </Grid>
            <Grid item xs={12} className="testimonialsGrid">
                <TestimonialCarousel />
            </Grid>
        </Grid>
    );
};

export default Testimonial;