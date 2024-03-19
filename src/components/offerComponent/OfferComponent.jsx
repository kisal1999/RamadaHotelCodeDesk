import React from 'react';
import './OfferComponent.css';
import companyLogo from '../assests/ramadaLogo.png';
import { Grid, Button } from '@material-ui/core'

const OfferComponent = () => {
    return (
        <div className='offerMainContainer'>
            <Grid container className="mainContainerOffers">
                <Grid item xs={12}>
                    <p className='offerTopic'>Offers</p>
                </Grid>
                <Grid item xs={12}>
                    <p className='offePercentage'>75% OFF NOW</p>
                </Grid>
                <Grid item xs={12} >
                    <p className='offerText'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Modi doloribus quibusdam voluptatem alias sint,
                        necessitatibus quia harum velit placeat debitis,
                        commodi ea iste pariatur quod dolore obcaecati, hic
                        fugiat consequuntur.
                    </p>
                </Grid>
                <Grid item xs={12} className='buttonDiv'>
                    <Button size="medium" className='getNowButton'>
                        Get Now
                    </Button>
                </Grid>
            </Grid>
        </div>
    );
};

export default OfferComponent;