import React from 'react';
import './CardOne.css';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';

const CardOne = (props) => {
    const {
        cardName,
        cardImage,
        firstLi,
        secondLi,
        thridLi,
        fourthLi
    } = props;

    return (

        <div className='wholeCard'>
            <Card className='insideCard'>
                <CardMedia
                    className='imageHeight'
                    image={cardImage}
                    title={cardName}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2" className="cardMainTopic">
                        {cardName}
                    </Typography>
                    <ul className='liAcc'>
                        <li>{firstLi}</li>
                        <li>{secondLi}</li>
                        <li>{thridLi}</li>
                        <li>{fourthLi}</li>
                    </ul>
                </CardContent>
                <CardActions>
                    <Grid container spacing={1}>
                        <Grid item xs={12}>
                            <Button size="medium" className='exploreButton'>
                                Explore
                            </Button>
                        </Grid>
                        <Grid item xs={12}>
                            <Button size="medium" className='bookNowButton'>
                                Book Now
                            </Button>
                        </Grid>
                    </Grid>
                </CardActions>
            </Card>
        </div>
    );
};

export default CardOne;