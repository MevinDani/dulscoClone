import React from 'react'
import './HistoryStyle.css'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import Year35 from './Year35';
import Year1996 from './Year1996';
import Year99 from './Year99';
import Year04 from './Year04';
import Year05 from './Year05';
import Year07 from './Year07';
import Year18 from './Year18';
import Year19 from './Year19';
import Year21One from './Year21One';
import Year21Two from './Year21Two';
import Year21Three from './Year21Three';
import Year22One from './Year22One';
import Year22Two from './Year22Two';
import Year23One from './Year23One';
import Year23Two from './Year23Two';



const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 4
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




const HistoryCarousel = () => {
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
                <Year35 />
            </div>

            <div className='CarouselCard'>
                <Year1996 />
            </div>

            <div className='CarouselCard'>
                <Year99 />
            </div>

            <div className='CarouselCard'>
                <Year04 />
            </div>

            <div className='CarouselCard'>
                <Year05 />
            </div>

            <div className='CarouselCard'>
                <Year07 />
            </div>

            <div className='CarouselCard'>
                <Year18 />
            </div>

            <div className='CarouselCard'>
                <Year19 />
            </div>

            <div className='CarouselCard'>
                <Year21One />
            </div>

            <div className='CarouselCard'>
                <Year21Two />
            </div>

            <div className='CarouselCard'>
                <Year21Three />
            </div>

            <div className='CarouselCard'>
                <Year22One />
            </div>

            <div className='CarouselCard'>
                <Year22Two />
            </div>

            <div className='CarouselCard'>
                <Year23One />
            </div>

            <div className='CarouselCard'>
                <Year23Two />
            </div>


        </Carousel>
    )
}

export default HistoryCarousel