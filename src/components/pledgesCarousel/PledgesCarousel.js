import React from 'react'
import './PledgeStyle.css'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Uae from './Uae';
import UaeTwo from './UaeTwo';
import WasteZero from './WasteZero';
import Aluminium from './Aluminium';



const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 3
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const CustomLeftArrow = ({ onClick }) => (
    <button
        onClick={onClick}
        className="leftArrowCarousel arrowCarousel"
    >
        ‹
    </button>
);

const CustomRightArrow = ({ onClick }) => (
    <button
        onClick={onClick}
        className="rightArrowCarousel arrowCarousel"
    >
        ›
    </button>
);



const PledgesCarousel = () => {
    return (
        <Carousel
            responsive={responsive}
            infinite={true}
            autoPlay={true}           /* Enable autoplay */
            autoPlaySpeed={2000}      /* Set autoplay speed (2 seconds) */
            transitionDuration={500}
            itemClass="carousel-item-spacing"  /* Class for spacing between items */
            arrows={false}
        >
            <div className='CarouselCard'>
                <Uae />
            </div>

            <div className='CarouselCard'>
                <UaeTwo />
            </div>

            <div className='CarouselCard'>
                <WasteZero />
            </div>

            <div className='CarouselCard'>
                <Aluminium />
            </div>

        </Carousel>
    )
}

export default PledgesCarousel