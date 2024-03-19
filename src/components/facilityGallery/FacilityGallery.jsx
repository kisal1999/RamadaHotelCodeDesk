import React from 'react';

import './FacilityGallery.css';
import '../Home.css';

import { Grid } from '@material-ui/core'
import ImageGalleryFacilities from '../surfaces/ImageGalleryFacilities/Gallery';

import image1 from '../assests/gallery1.png';
import image2 from '../assests/gallery2.png';
import image3 from '../assests/gallery3.png';
import image4 from '../assests/gallery4.png';
import image5 from '../assests/gallery5.png';

const FacilityGallery = () => {
    const images = [
        image2,
        image3,
        image4,
        image5,
        image1,
    ];
    return (
        <Grid container className="galleryContainer">
            <Grid item xs={12}>
                <p className='redSmallTopic'>Facilities</p>
                <p className='greyBigTopic'>
                    Enjoy completed and best quality facilities
                </p>
            </Grid>
            <Grid item xs={12} className='facilityGalleryImages'>
                <ImageGalleryFacilities
                    images={images}
                />
            </Grid>
        </Grid>
    );
};

export default FacilityGallery;