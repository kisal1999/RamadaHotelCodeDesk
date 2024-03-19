import React from 'react';
import './CardBanquet.css';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';

import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const CardBanquet = (props) => {
    const {
        cardName,
        cardImage,
        banquetPara,
    } = props;

    return (

        <div className='wholeCardBanquet'>
            <Card className='insideCardBanquet'>
                <CardMedia
                    className='imageHeightBanquet'
                    image={cardImage}
                    title={cardName}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2" className="cardMainTopicBanquet">
                        {cardName}
                    </Typography>
                    <p className='liBanq'>
                        {banquetPara}
                    </p>
                </CardContent>
                <CardActions>
                    <Grid container spacing={1}>
                        <Grid item xs={12}>
                            <Button size="medium" className='learnMoreButton'>
                                LearnMore <ArrowForwardIcon style={{ verticalAlign: 'middle' }} />
                            </Button>
                        </Grid>
                    </Grid>
                </CardActions>
            </Card>
        </div>
    );
};

export default CardBanquet;