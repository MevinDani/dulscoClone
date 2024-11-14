import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Agriculture from './Agriculture';
import Aviation from './Aviation';
import Facilities from './Facilities';
import Fmcg from './Fmcg';
import Gov from './Gov';
import Hospitality from './Hospitality';
import ItTelecoms from './ItTelecoms';
import ManuFacturing from './ManuFacturing';
import OilGas from './OilGas';
import Property from './Property';
import './SectorCarousel.css'


const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4
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



const SectorCarousel = () => {
    return (
        <Carousel
            responsive={responsive}
            infinite={true}
            autoPlay={true}           /* Enable autoplay */
            autoPlaySpeed={2000}      /* Set autoplay speed (2 seconds) */
            transitionDuration={500}
            itemClass="carousel-item-spacing"  /* Class for spacing between items */
            customLeftArrow={<CustomLeftArrow />}
            customRightArrow={<CustomRightArrow />}
        >
            <div className='CarouselCard'>
                <Agriculture />
            </div>
            <div className='CarouselCard'>
                <Aviation />
            </div>
            <div className='CarouselCard'>
                <Facilities />
            </div>
            <div className='CarouselCard'>
                <Fmcg />
            </div>
            <div className='CarouselCard'>
                <Gov />
            </div>
            <div className='CarouselCard'>
                <Hospitality />
            </div>
            <div className='CarouselCard'>
                <ItTelecoms />
            </div>
            <div className='CarouselCard'>
                <ManuFacturing />
            </div>
            <div className='CarouselCard'>
                <OilGas />
            </div>
            <div className='CarouselCard'>
                <Property />
            </div>
        </Carousel>
    )
}

export default SectorCarousel