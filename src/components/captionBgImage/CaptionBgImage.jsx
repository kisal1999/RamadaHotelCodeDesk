import React from 'react';
import './CaptionBgImage.css';
import captionBg from '../assests/captionBg.png';
import { Grid } from '@material-ui/core'

const CaptionBgImage = () => {
    return (
        <Grid container className="mainContainerBg">
            <img src={captionBg} alt="Ramada Background Image" className="backgroundImage" />
            <div className="textOverlay">
                <h1>LOREM IPSUM IS SIMPLY DUMMY TEXT OF THE PRINTING</h1>
                <h5 class="smallOverlayText">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime nobis reprehenderit, neque minus dignissimos 
                    illum aperiam dolorem deleniti aut? Reprehenderit laboriosam, repellat mollitia explicabo architecto blanditiis 
                    quisquam fugit corporis aspernatur?
                </h5>
            </div>
        </Grid>
    );
};

export default CaptionBgImage;