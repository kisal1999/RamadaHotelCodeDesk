import React from 'react';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './TestimonialCarousel.css';
import StarRating from './StarRating';

import testi1 from '../../assests/testi1.png';
import testi2 from '../../assests/testi2.png';
import testi3 from '../../assests/testi3.png';
import testi4 from '../../assests/testi4.png';

const TestimonialCarousel = () => {
    const testimonials = [
        {
            id: 1,
            quote: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown .Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            author: "John Doe",
            image: testi1,
            rating: 5,
        },
        {
            id: 2,
            quote: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown .Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            author: "Jane Doe",
            image: testi2,
            rating: 4,
        },
        {
            id: 3,
            quote: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown .Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            author: "Jane Doe",
            image: testi3,
            rating: 3,
        },
        {
            id: 4,
            quote: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown .Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            author: "Jane Doe",
            image: testi4,
            rating: 5,
        },
        {
            id: 5,
            quote: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown .Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            author: "Jane Doe",
            image: testi2,
            rating: 5,
        },
        {
            id: 6,
            quote: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown .Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            author: "Jane Doe",
            image: testi1,
            rating: 3,
        },
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3.5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
    };

    return (
        <div className="testimonialCarousel">
            <Slider {...settings}>
                {testimonials.map(testimonial => (
                    <div key={testimonial.id} className="testimonialSlide">
                        <img src={testimonial.image} alt={testimonial.author} className="personImageTesti" />
                        <div className="testimonial">
                            <p>{testimonial.quote}</p>
                            <div className="starRating">
                                <StarRating rating={testimonial.rating} />
                            </div>
                            <p className="author">- {testimonial.author}</p>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default TestimonialCarousel;
