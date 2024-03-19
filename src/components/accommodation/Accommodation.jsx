import React from 'react';

import './Accommodation.css';
import '../Home.css';

import { Grid } from '@material-ui/core'
import CardOne from '../surfaces/card/CardOne';

import acc1 from '../assests/acc1.png';
import acc2 from '../assests/acc2.png';
import acc3 from '../assests/acc3.png';
import acc4 from '../assests/acc4.png';

const Accommodation = () => {
    return (
        <Grid container className="accommodationContainer">
            <Grid item xs={12}>
                <p className='redSmallTopic'>Accommodation</p>
                <p className='greyBigTopic'>
                    Comfortable Rooms Just For You
                </p>
            </Grid>
            <Grid item xs={12}className='accCardMargin'>
                <Grid container >
                    <Grid item xs={12}  md={6} lg={3} >
                        <CardOne
                            cardName="Twin Bedded Deluxe Room"
                            cardImage={acc1}
                            firstLi="Lorem Ipsum"
                            secondLi="Typesetting industry"
                            thridLi="Lorem Ipsum has been"
                            fourthLi="The industry's standard"
                        />
                    </Grid>
                    <Grid item  xs={12}  md={6} lg={3} >
                        <CardOne
                            cardName="King Bed Deluxe Room"
                            cardImage={acc2}
                            firstLi="Lorem Ipsum"
                            secondLi="Typesetting industry"
                            thridLi="Lorem Ipsum has been"
                            fourthLi="The industry's standard"
                        />
                    </Grid>
                    <Grid item  xs={12}  md={6} lg={3} >
                        <CardOne
                            cardName="Splendor Suite"
                            cardImage={acc3}
                            firstLi="Lorem Ipsum"
                            secondLi="Typesetting industry"
                            thridLi="Lorem Ipsum has been"
                            fourthLi="The industry's standard"
                        />
                    </Grid>
                    <Grid item  xs={12}  md={6} lg={3} >
                        <CardOne
                            cardName="Premier Suite"
                            cardImage={acc4}
                            firstLi="Lorem Ipsum"
                            secondLi="Typesetting industry"
                            thridLi="Lorem Ipsum has been"
                            fourthLi="The industry's standard"
                        />
                    </Grid>

                </Grid>
            </Grid>
        </Grid>
    );
};

export default Accommodation;