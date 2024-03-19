import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';

const StarRating = ({ rating }) => {
    const totalStars = 5;
    return (
        <div>
            {[...Array(totalStars)].map((_, index) => (
                <FontAwesomeIcon
                    key={index}
                    icon={index < rating ? solidStar : regularStar}
                    style={{ color: index < rating ? '#D11242' : '#e4e5e9', marginRight: '3px' }}
                />
            ))}
        </div>
    );
};

export default StarRating; 