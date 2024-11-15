import React, { useEffect, useState } from 'react'
import './AboutUs.css'
import { useInView } from 'react-intersection-observer';


import AboutSMask from '../../images/AboutSMask.png'
import dulsocImg from '../../images/dulscoImg.png'
import PurposeImg from '../../images/Purpose.webp'
import missionImg from '../../images/mission.webp'
import visionImg from '../../images/vision.webp'
import valuesImg from '../../images/values.webp'
import portfolio1 from '../../images/portfolio1.webp'
import portfolio2 from '../../images/portfolio2.webp'
import portfolio3 from '../../images/portfolio3.webp'
import portfolio4 from '../../images/portfolio4.webp'


import { useNavigate } from 'react-router-dom';
import { LiaGreaterThanSolid } from "react-icons/lia";
import { FaArrowRightLong } from 'react-icons/fa6';
import SectorCarousel from '../../components/sectorCarousel/SectorCarousel';
import Footer from '../../components/Footer/Footer';


const AboutUs = () => {

    const navigate = useNavigate()

    const [isVisible, setIsVisible] = useState(false);

    const [CircleContImgisVisible, setCircleContImgIsVisible] = useState(false)

    const [portFolioImgisVisible, setPortFolioImgIsVisible] = useState(false)



    const { ref: circleContRef, inView: circleContInView } = useInView({
        triggerOnce: true,  // Trigger animation once when the element comes into view
        threshold: 0.5,  // Trigger when 50% of the element is in view
    });

    const { ref: portfolioRef, inView: portfolioInView } = useInView({
        triggerOnce: true,  // Trigger animation once when the element comes into view
        threshold: 0.5,  // Trigger when 50% of the element is in view
    });

    useEffect(() => {
        if (circleContInView) {
            setCircleContImgIsVisible(true);
        }
    }, [circleContInView]);

    useEffect(() => {
        if (portfolioInView) {
            // Trigger portfolio image animation when the portfolio section comes into view
            setPortFolioImgIsVisible(true);
        }
    }, [portfolioInView]);


    useEffect(() => {
        // Trigger the animation after the component mounts
        setIsVisible(true);
    }, []);

    return (
        <div className='AboutUsWrap'>

            <div className='AboutUsContainer'>


                {/* AboutUsBanner */}
                <div className='AboutUsBannerCont'>

                    <div className={`AboutUsTextBanner ${isVisible ? 'animate-slide-up' : ''}`}>
                        ABOUT US
                    </div>

                    <img className='banner-mask' src={AboutSMask} alt="" />


                    <div className='AboutNavWrap'>

                        <div className='AboutNavCont'>

                            <div onClick={() => navigate('/')}>Home</div>

                            <LiaGreaterThanSolid />
                            <div className='AboutUsLink'>About Us</div>
                        </div>
                    </div>
                </div>

                {/* OurStory */}
                <div className='OurStoryWrap'>

                    <div className={`OurStorySection`}>

                        <div className='OurStorySectionWrap'>

                            {/* OurStoryImageCont - Animation from Right */}
                            <div className={`OurStoryImageCont ${isVisible ? 'animate-from-left' : ''}`}>
                                <div className='OurStoryImageItem'>
                                    <img className='OurStoryImageStyle'
                                        src={dulsocImg}
                                        alt=""
                                    />
                                </div>
                            </div>

                            {/* OurStoryCont - Animation from Left */}
                            <div className={`OurStoryCont ${isVisible ? 'animate-from-right' : ''}`}>
                                <div className='OurStoryHeadText'>
                                    About Us
                                </div>
                                <div className='OurStoryBigText'>
                                    OUR STORY
                                </div>
                                <div className='OurStoryDescription'>
                                    The inception of Dulsco dates back to 1935, with an incident-turned-opportunity. A British trading ship at anchor in the Arabian Gulf needed able people to help bring its cargo of foodstuff and clothing ashore. An entrepreneur, noticing the demand, agreed to supply the workforce for the job. This entrepreneurial problem-solving approach has stayed with Dulsco throughout its journey.

                                    Our story began with a handful of people, and today, over eight decades later, we are 16,000 employees strong. Our teams service 3500+ clients locally and internationally.

                                    Dulsco Group’s expertise lies in innovative solutions and services, but our strength lies in our people. Keeping them at heart, we strive to make communities more productive, efficient and sustainable. From our humble beginnings in the UAE, Dulsco Group leads us to deliver people, environment, talent, and specialist energy solutions that pave the way for better performance and productivity for our clients.
                                </div>

                            </div>
                        </div>
                    </div>

                </div>

                {/* circleFeatures */}
                <div className={`CircleFeaturesCont ${CircleContImgisVisible ? 'animate-slide-up' : ''}`} ref={circleContRef}>

                    <div className='CircleFeaturesList'>

                        <div className='CircleCard'>
                            <div className='CircleIcon'>
                                <img src={PurposeImg} alt="" />
                            </div>

                            <div className='CircleContent'>
                                <div className='CircleHeadText'>PURPOSE</div>
                                <div className='CircleDescText'>To be better today than we were yesterday</div>
                            </div>
                        </div>
                        <div className='CircleCard'>
                            <div className='CircleIcon'>
                                <img src={missionImg} alt="" />
                            </div>

                            <div className='CircleContent'>
                                <div className='CircleHeadText'>MISSION</div>
                                <div className='CircleDescText'>Providing solutions that enable communities to perform at their best, to live and operate sustainably and create better outcomes for all</div>
                            </div>
                        </div>
                        <div className='CircleCard'>
                            <div className='CircleIcon'>
                                <img src={visionImg} alt="" />
                            </div>

                            <div className='CircleContent'>
                                <div className='CircleHeadText'>VISION</div>
                                <div className='CircleDescText'>Communities that thrive and prosper</div>
                            </div>
                        </div>
                        <div className='CircleCard'>
                            <div className='CircleIcon'>
                                <img src={valuesImg} alt="" />
                            </div>

                            <div className='CircleContent'>
                                <div className='CircleHeadText'>VALUES</div>
                                <div className='CircleDescText'>Connected
                                    Conscientious
                                    Enterprising</div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* solutions */}
                <div className='SolutionsCont'>

                    <div className='SolutionsHeadText'>SOLUTIONS THAT MAKE A DIFFERENCE</div>

                    <div className='PortFolioImgCont' ref={portfolioRef}>
                        <div className={portFolioImgisVisible ? 'animate-slide-up' : ''}>
                            <img src={portfolio1} alt="portfolio1" />
                        </div>
                        <div className={portFolioImgisVisible ? 'animate-slide-up' : ''}>
                            <img src={portfolio2} alt="portfolio2" />
                        </div>
                        <div className={portFolioImgisVisible ? 'animate-slide-up' : ''}>
                            <img src={portfolio3} alt="portfolio3" />
                        </div>
                        <div className={portFolioImgisVisible ? 'animate-slide-up' : ''}>
                            <img src={portfolio4} alt="portfolio4" />
                        </div>
                    </div>
                </div>

                {/* HistoryCarousel */}

                {/* leaderShipCarousel */}
                {/* <div className='leaderShipCarouselWrap'>

                    <div className='SolutionsHeadText' style={{ color: 'white' }}>EXECUTIVE LEADERSHIP</div>

                    <div style={{ marginTop: '50px' }}>
                        <SectorCarousel />
                    </div>
                </div> */}

                <div className='LatestNewsWrap'>

                    <div className='LatesNewsHeadText'>
                        EXECUTIVE LEADERSHIP
                    </div>

                    <div style={{ marginTop: '50px' }}>
                        <SectorCarousel />
                    </div>
                </div>

                {/* footer */}

                <Footer />

            </div>
        </div>
    )
}

export default AboutUs