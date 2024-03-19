import React from 'react';
import './CardWineAndDine.css';

import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';

import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const CardWineAndDine = (props) => {

    const {
        cardName,
        cardImage,
    } = props;

    return (

        <div className='wholeCardWineAndDine'>
            <Grid container spacing={3} justify="center">
                <Grid item xs={12} >
                    <Card >
                        <CardMedia
                            className='wineAndDineImage'
                            image={cardImage}
                            title={cardName}
                        >
                            <div className="cardNameOverlay">
                                <Typography className="cardNameOverlayText">{cardName}<ArrowForwardIcon style={{ verticalAlign: 'middle' }} /></Typography>
                            </div>
                        </CardMedia>
                    </Card>
                </Grid>
            </Grid>
        </div>
    );
};

export default CardWineAndDine;