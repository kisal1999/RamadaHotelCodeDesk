import React from 'react';

import './Home.css';

import NavigationBar from './navBar/NavigationBar';
import CaptionBgImage from './captionBgImage/CaptionBgImage';
import Booking from './booking/Booking';
import AboutUs from './aboutUs/AboutUs';
import Accommodation from './accommodation/Accommodation';
import FacilityGallery from './facilityGallery/FacilityGallery';
import OfferComponent from './offerComponent/OfferComponent';
import WineAndDine from './wineAndDine/WineAndDine';
import Banqueting from './banqueting/Banqueting';
import HighTea from './highTea/HighTea';
import DeliveryAndTakeaway from './deliveryAndTakeAway/DeliveryAndTakeaway';
import Testimonial from './testimonials/Testimonial';
import Footer from './footer/Footer';

const Home = () => {
    return (
        <div className='overflow'>
            <NavigationBar />
            <div className='margintopBg'>
                <CaptionBgImage />
            </div>
            <Booking />
            <AboutUs />
            <Accommodation />
            <FacilityGallery />
            <OfferComponent />
            <WineAndDine />
            <Banqueting />
            <HighTea />
            <DeliveryAndTakeaway />
            <Testimonial />
            <Footer />
        </div>
    );
};

export default Home; 