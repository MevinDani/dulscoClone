import React from 'react'
import './CredentialStyle.css'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CredOne from './CredOne';
import CredTwo from './CredTwo';
import CredThree from './CredThree';
import CredFour from './CredFour';
import CredFive from './CredFive';
import CredSix from './CredSix';



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



const CredentialCarousel = () => {
    return (
        <Carousel
            responsive={responsive}
            infinite={true}
            autoPlay={true}           /* Enable autoplay */
            autoPlaySpeed={2000}      /* Set autoplay speed (2 seconds) */
            transitionDuration={1000}
            itemClass="carousel-item-spacing"  /* Class for spacing between items */
            arrows={false}
        >
            <div className='CarouselCard'>
                <CredOne />
            </div>

            <div className='CarouselCard'>
                <CredTwo />
            </div>

            <div className='CarouselCard'>
                <CredThree />
            </div>

            <div className='CarouselCard'>
                <CredFour />
            </div>

            <div className='CarouselCard'>
                <CredFive />
            </div>

            <div className='CarouselCard'>
                <CredSix />
            </div>



        </Carousel>
    )
}

export default CredentialCarousel