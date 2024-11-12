import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import './HomePage.css'
import waveImg from '../../images/waveImg.png'
import portfolio1 from '../../images/portfolio1.webp'
import portfolio2 from '../../images/portfolio2.webp'
import portfolio3 from '../../images/portfolio3.webp'
import portfolio4 from '../../images/portfolio4.webp'
import maskLogo from '../../images/mask-logo.png'
import counter1 from '../../images/counter-img1.png'
import counter2 from '../../images/counter-img2.png'
import counter3 from '../../images/counter-img3.png'
import dulsocImg from '../../images/dulscoImg.png'

const HomePage = () => {

    const [isVisible, setIsVisible] = useState(false);

    const [portFolioImgisVisible, setPortFolioImgIsVisible] = useState(false)

    const [companyDataIsVisible, setCompanyDataIsVisible] = useState(false);

    const [homeAboutIsVisible, setHomeAboutIsVisible] = useState(false);

    const [clientsCount, setClientsCount] = useState(0);
    const [employeesCount, setEmployeesCount] = useState(0);
    const [experienceCount, setExperienceCount] = useState(0);

    const { ref, inView } = useInView({
        triggerOnce: true, // Trigger only once when scrolled into view
        threshold: 0.5, // Trigger when 50% of the component is in view
    });

    // Use useInView hooks for separate refs
    const { ref: portfolioRef, inView: portfolioInView } = useInView({
        triggerOnce: true,  // Trigger animation once when the element comes into view
        threshold: 0.5,  // Trigger when 50% of the element is in view
    });

    const { ref: companyDataRef, inView: companyDataInView } = useInView({
        triggerOnce: true,  // Trigger animation once when the element comes into view
        threshold: 0.5,  // Trigger when 50% of the element is in view
    });

    const { ref: counterRef, inView: counterInView } = useInView({
        triggerOnce: true,  // Trigger animation once when the element comes into view
        threshold: 0.5,  // Trigger when 50% of the element is in view
    });

    const { ref: homeAboutRef, inView: homeAboutInView } = useInView({
        triggerOnce: true,  // Trigger animation once when the element comes into view
        threshold: 0.5,  // Trigger when 50% of the element is in view
    });

    useEffect(() => {
        // Trigger the animation after the component mounts
        setIsVisible(true);
    }, []);

    useEffect(() => {
        if (portfolioInView) {
            // Trigger portfolio image animation when the portfolio section comes into view
            setPortFolioImgIsVisible(true);
        }
    }, [portfolioInView]);

    useEffect(() => {
        if (companyDataInView) {
            setCompanyDataIsVisible(true);
        }
    }, [companyDataInView])

    useEffect(() => {
        if (homeAboutInView) {
            setHomeAboutIsVisible(true);
        }
    }, [homeAboutInView])


    useEffect(() => {
        if (counterInView) {


            // Function to increment the count gradually
            const incrementCount = (target, setter, interval = 10) => {
                let currentCount = 0;
                const step = () => {
                    if (currentCount < target) {
                        currentCount += Math.ceil(target / 100);
                        setter(currentCount);
                        setTimeout(step, interval);
                    } else {
                        setter(target);
                    }
                };
                step();
            };

            // Increment counters
            incrementCount(3500, setClientsCount);
            incrementCount(16000, setEmployeesCount);
            incrementCount(80, setExperienceCount);
        }
    }, [counterInView]);

    return (
        <div className='HomePageWrap'>

            {/* HomeBannerCont */}

            <div className='HomeBannerWrap'>
                <div className='HomeBannerCont'>
                    <div className={`PowerTextStyle ${isVisible ? 'animate-slide-up' : ''}`}>
                        POWERING BETTER <br />
                        COMMUNITIES
                    </div>

                    <div className={`DTEXT ${isVisible ? 'animate-slide-up' : ''}`}>
                        D
                    </div>
                </div>

                <div style={{
                    position: 'relative',
                    bottom: '250px'
                }}>
                    <img style={{
                        width: '100%',
                        height: '400px'
                    }} src={waveImg} alt="" />
                </div>
            </div>



            {/* portFolio */}

            <div className='PortFolioWrap'>

                <div className='PortFolioHeader'>
                    OUR PORTFOLIO
                </div>

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

            {/* companyData */}

            <div className={`CompanyDataWrap ${companyDataIsVisible ? 'animate-slide-up' : ''}`} ref={companyDataRef}>

                <div className='OneCompanyHeadText'>
                    ONE COMPANY - ONE VISION - MANY SOLUTIONS
                </div>

                <div>
                    <img src={maskLogo} alt="" />
                </div>


                <div className='CompanyDataCounteWrap'
                    ref={counterRef}
                >
                    <div className='CompanyDataCounterCont'>
                        <div>
                            <div className='CounterContHeadText'>Clients</div>
                            <div className='CounterContCountext'>{clientsCount}+</div>
                        </div>
                        <div>
                            <img src={counter1} alt="" />
                        </div>
                    </div>
                    <div className='CompanyDataCounterCont'>
                        <div>
                            <div className='CounterContHeadText'>Employees</div>
                            <div className='CounterContCountext'>{employeesCount}+</div>
                        </div>
                        <div>
                            <img src={counter2} alt="" />
                        </div>
                    </div>
                    <div className='CompanyDataCounterCont'>
                        <div>
                            <div className='CounterContHeadText'>Years of Experience</div>
                            <div className='CounterContCountext'>{experienceCount}+</div>
                        </div>
                        <div>
                            <img src={counter3} alt="" />
                        </div>
                    </div>
                </div>
            </div>

            {/* home-about-section */}

            {/* <div className='HomeAboutSection'>

                <div className='HomeAboutSectionWrap'>

                    <div className='HomeAboutCont'>
                        <div className='HomeAboutHeadText'>
                            We are Dulsco Group
                        </div>
                        <div className='HomeAboutBigText'>
                            COMMITTED TO <br />
                            DELIVER
                        </div>
                        <div className='HomeAboutDescription'>
                            Dulsco Group is a leader in the provision of People Solutions,
                            Environmental Solutions, Talent Solutions and Energy Recruitment Solutions,
                            that supports growth, bolsters commerce and creates a more sustainable way of life.
                            What began as a simple stevedoring operation on the banks of the Arabian Sea in 1935 has
                            today grown into a multifaceted enterprise serving public and private sectors across the
                            Middle East and the world. The industries and organisations we partner with are many,
                            but at Dulsco, we have a singular ambition – to power better communities
                        </div>
                    </div>

                    <div className='HomeAboutImageCont'>

                        <div className='HomeAboutImageItem'>
                            <img className='HomeAboutImageStyle' src={dulsocImg} alt="" />
                        </div>

                    </div>
                </div>
            </div> */}

            <div className={`HomeAboutSection ${homeAboutIsVisible ? 'animate-slide-in' : ''}`} ref={homeAboutRef}>
                <div className='HomeAboutSectionWrap'>
                    {/* HomeAboutCont - Animation from Left */}
                    <div className={`HomeAboutCont ${homeAboutIsVisible ? 'animate-from-left' : ''}`}>
                        <div className='HomeAboutHeadText'>
                            We are Dulsco Group
                        </div>
                        <div className='HomeAboutBigText'>
                            COMMITTED TO <br />
                            DELIVER
                        </div>
                        <div className='HomeAboutDescription'>
                            Dulsco Group is a leader in the provision of People Solutions,
                            Environmental Solutions, Talent Solutions and Energy Recruitment Solutions,
                            that supports growth, bolsters commerce and creates a more sustainable way of life.
                            What began as a simple stevedoring operation on the banks of the Arabian Sea in 1935 has
                            today grown into a multifaceted enterprise serving public and private sectors across the
                            Middle East and the world. The industries and organisations we partner with are many,
                            but at Dulsco, we have a singular ambition – to power better communities.
                        </div>
                    </div>

                    {/* HomeAboutImageCont - Animation from Right */}
                    <div className={`HomeAboutImageCont ${homeAboutIsVisible ? 'animate-from-right' : ''}`}>

                        {/* <div class="face face1">
                            <div class="circle"></div>
                        </div> */}
                        <div className='HomeAboutImageItem'>
                            <img className='HomeAboutImageStyle'
                                src={dulsocImg}
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>

        </div >
    )
}

export default HomePage