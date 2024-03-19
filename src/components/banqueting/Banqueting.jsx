import React from 'react';

import './Banqueting.css';
import '../Home.css';

import { Grid } from '@material-ui/core'
import CardBanquet from '../surfaces/cardBanquet/CardBanquet';

import banquet1 from '../assests/banquet1.png';
import banquet2 from '../assests/banquet2.png';
import banquet3 from '../assests/banquet3.png';

const Banqueting = () => {
    return (
        <Grid container className="banquetingContainer">
            <Grid item xs={12}>
                <p className='redSmallTopic'>Banqueting</p>
                <p className='greyBigTopic'>
                    Ramada offers some of the choicest banquet hall
                </p>
                <p className='greySmallTopic'>
                    Ramada Colombo offers some of the choicest banquet
                    halls in Colombo for your special occasion, business
                    meeting or intimate gathering.
                </p>
            </Grid>
            <Grid item xs={12} className="wineAndDineCardContainer">
                <Grid container >
                    <Grid item xs={12} md={6} lg={4}>
                        <CardBanquet
                            cardName="The Liberty Ballroom"
                            cardImage={banquet1}
                            banquetPara="An idyllic setting 
                            for any grand wedding celebration or 
                            special occasion. Liberty Ball Room offers a 
                            spacious and lavish ambience to ensure a truly 
                            memorable"
                        />
                    </Grid>
                    <Grid item xs={12} md={6} lg={4}>
                        <CardBanquet
                            cardName="The Liberty Ballroom"
                            cardImage={banquet2}
                            banquetPara="A spacious meeting room with an 
                            aquarium style view of the streets of Colombo."
                        />
                    </Grid>
                    <Grid item xs={12} md={6} lg={4}> 
                        <CardBanquet
                            cardName="The Liberty Ballroom"
                            cardImage={banquet3}
                            banquetPara="A private meeting space equipped 
                            with state of the art technology."
                        />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Banqueting;