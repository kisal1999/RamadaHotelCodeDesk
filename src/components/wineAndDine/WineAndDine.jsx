import React from 'react';

import './WineAndDine.css';
import '../Home.css';

import { Grid } from '@material-ui/core'
import CardWineAndDine from '../surfaces/cardWineAndDine/CardWineAndDine';

import wd1 from '../assests/wd1.png';
import wd2 from '../assests/wd2.png';
import wd3 from '../assests/wd3.png';
import wd4 from '../assests/wd4.png';
import wd5 from '../assests/wd5.png';

const WineAndDine = () => {
    return (
        <Grid container className="wineAndDineContainer">
            <Grid item xs={12}>
                <p className='redSmallTopic'>Wine & Dine</p>
                <p className='greyBigTopic'>
                    Ramada Colombo Restaurants
                </p>
            </Grid>
            <Grid item xs={12} className="wineAndDineCardContainer">
                <Grid container >
                    <Grid item xs={4}>
                        <CardWineAndDine
                            cardName="The Gardenia Coffee Shop"
                            cardImage={wd1}
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <CardWineAndDine
                            cardName="Alhambra"
                            cardImage={wd2}
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <CardWineAndDine
                            cardName="Oasis Lounge"
                            cardImage={wd3}
                        />
                    </Grid>
                </Grid>
                <Grid container className='wineSecondRow' spacing={2}>
                    <Grid item xs={6} className="alignRightFirst" >
                        <CardWineAndDine
                            cardName="The Secret Garden"
                            cardImage={wd4}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <CardWineAndDine
                            cardName="Baked"
                            cardImage={wd5}
                        />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default WineAndDine;