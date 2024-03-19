import React from 'react';
import './DeliveryAndTakeaway.css';
import '../Home.css';

import deliveryTakeawayImage from '../assests/deliveryTakeawayImage.png';
import { Grid, Button } from '@material-ui/core'

const DeliveryAndTakeaway = () => {
    return (
        <Grid container className="deliveryTakeawayContainer">
            <Grid item xs={12}>
                <p className='redSmallTopic'>Delivery & Takeaway service</p>
            </Grid>
            <Grid item xs={12} md={12} lg={6} >
                <div >
                    <div>
                        <p className='greyBigTopic'>
                            Giving your hunger a safer, faster and better alternative
                        </p >
                        <p className='deliveryTakeawayText' >
                            users can pay directly through our website with Visa or
                            MasterCard or opt for cash or card payment on delivery!
                            Our website is extremely user friendly and offers a stress-free
                            ordering experience with the option to schedule a delivery on a
                            particular date or time.
                        </p>
                        <p className='deliveryTakeawayText' >
                            Our delivery radius will be from Colombo 1-15 and will include areas
                            in Mount Lavinia, Nawala, Nugegoda, Kohuwala, Dehiwala, Rajagiriya, Welikada,
                            Wellampitiya, Ethul Kotte, Kolonnawa, Sri Jayawardenapura Kotte, Pelawatta,
                            Kotikawatta, Battaramulla, Pita Kotte, Attidiya, Mirihana, Koswatta.If you
                            reside in any of the above locations, orders will be delivered subjected to
                            a delivery charge.
                        </p>
                        <p className='deliveryTakeawayBoldText'>
                            Delivery times are between 10 am to 10 pm.
                        </p>
                        <p className='deliveryTakeawayBoldText'>
                            For more information contact us on (+94) 112 422 001, Ext. 399 or (+94) 777 864 864.
                        </p>
                    </div>
                    <Grid item xs={12} className='buttonDivOrder'>
                        <Button size="medium" className='orderNowButton'>
                            Order Now
                        </Button>
                    </Grid>

                </div>
            </Grid>
            <Grid item xs={6} className='deliveryTakeawayStyle'>
                <img src={deliveryTakeawayImage} alt="View" className='deliveryTakeawayImage' />
            </Grid>

        </Grid>
    );
};

export default DeliveryAndTakeaway;