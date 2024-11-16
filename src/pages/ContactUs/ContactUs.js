import React, { useEffect, useState } from 'react'
import './ContactUs.css'

import AboutSMask from '../../images/AboutSMask.png'
import DulscoLogo from '../../images/logoDulsco.png'
import Parisma from '../../images/portfolio3.webp'
import Agr from '../../images/portfolio4.webp'

import { useNavigate } from 'react-router-dom';
import { LiaGreaterThanSolid } from "react-icons/lia";
import { FaArrowRightLong } from "react-icons/fa6";
import Footer from '../../components/Footer/Footer';
import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";


const ContactUs = () => {

    const navigate = useNavigate()

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Trigger the animation after the component mounts
        setIsVisible(true);
    }, []);

    return (
        <div className='AboutUsWrap'>

            <div className='AboutUsContainer'>

                {/* AboutUsBanner */}
                <div className='ContactUsBannerCont'>

                    <div className={`AboutUsTextBanner ${isVisible ? 'animate-slide-up' : ''}`}>
                        CONTACT US
                    </div>

                    <img className='banner-mask' src={AboutSMask} alt="" />


                    <div className='AboutNavWrap'>

                        <div className='AboutNavCont'>

                            <div onClick={() => navigate('/')}>Home</div>

                            <LiaGreaterThanSolid />
                            <div className='AboutUsLink'>Contact Us</div>
                        </div>
                    </div>
                </div>

                {/* contactUsForm */}
                <div className='ContactUsFormWrap'>

                    <div className='ContactUsLeftCont'>

                        <div className='ContactUsEmailCont'>
                            <div className='ContactUsEmailContHeadText'>GET IN TOUCH</div>
                            <div className='ContactUsEmailContEmailText'>
                                You cab email us on dulsco@dulsco.com
                            </div>
                        </div>

                        <div className='ContactUsJobLookCont'>

                            <div className='ContactUsEmailContHeadText'>
                                ARE YOU LOOKING FOR A JOB ?
                            </div>

                            <div className='orngArrowWrapContact'>
                                <div className='orngArrowContContact'>
                                    <div>
                                        VIEW JOBS
                                    </div>
                                    <div>
                                        <FaArrowRightLong />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='ContactUsRightCont'>

                        <div className='ContactUsInputCont'>
                            <input className='ContactUsInput' type="text" placeholder='Full Name*' />
                        </div>
                        <div className='ContactUsInputCont'>
                            <input className='ContactUsInput' type="text" placeholder='Email Address*' />
                        </div>
                        <div className='ContactUsInputCont'>
                            <input className='ContactUsInput' type="text" placeholder='Phone Number*' />
                        </div>
                        <div className='ContactUsInputCont'>
                            <select className='ContactUsInput selectInp' id="query-related-to">
                                <option value="" disabled selected>My query is related to*</option>
                                <option value="Sale Enquiry">Sale Enquiry</option>
                                <option value="General Enquiry">General Enquiry</option>
                                <option value="Vendor or Supplier Enquiry">Vendor or Supplier Enquiry</option>
                                <option value="Suggestions or Feedback">Suggestions or Feedback</option>
                                <option value="Complaints">Complaints</option>
                            </select>
                        </div>

                        <div className='ContactUsInputCont textBoxCont'>
                            <textarea className='ContactUsInput ContactUsMessage' placeholder='Your Message*'></textarea>
                        </div>

                        <div className='orngArrowWrapContact SendButton'>
                            <div className='orngArrowContContact'>
                                <div>
                                    SEND
                                </div>
                                <div>
                                    <FaArrowRightLong />
                                </div>
                            </div>
                        </div>
                    </div>


                </div>

                {/* offices */}

                <div className='OfficesWrap'>

                    <div className='OfficesHeadCont'>
                        <div className='OfficesHeadText'>OFFICES</div>
                    </div>

                    <div className='OfficeCardWrap'>

                        <div className='OfficeCardCont'>
                            <div>
                                <img src={DulscoLogo} alt="" />
                            </div>

                            <div className='OfficeCardHeadText'>
                                HEAD OFFICE
                            </div>

                            <div className='OfficeCardDetailsCont'>
                                <IoLocationSharp style={{ color: '#fd4238', fontSize: '32px' }} />
                                26th Street, Al Quoz Industrial Area 4
                                P.O Box 6238
                                Dubai, UAE
                            </div>

                            <div className='OfficeCardDetailsCont'>
                                <FaPhoneAlt style={{ color: '#fd4238', fontSize: '16px' }} />
                                800 DULSCO (385726)
                            </div>

                            <div className='OfficeCardDetailsCont'>
                                <FaPhoneAlt style={{ color: '#fd4238', fontSize: '16px' }} />
                                +971 4 3404660
                            </div>

                            <div className='OfficeCardDetailsCont'>
                                <IoMail style={{ color: '#fd4238', fontSize: '16px' }} />
                                dulsco@dulsco.com
                            </div>

                            <div className='OfficeCardDetailsCont'>
                                GET DIRECTIONS
                            </div>
                        </div>
                        <div className='OfficeCardCont'>
                            <div>
                                <img src={Parisma} alt="" />
                            </div>

                            <div className='OfficeCardHeadText'>
                                HEAD OFFICE
                            </div>

                            <div className='OfficeCardDetailsCont'>
                                <IoLocationSharp style={{ color: '#fd4238', fontSize: '32px' }} />
                                26th Street, Al Quoz Industrial Area 4
                                P.O Box 6238
                                Dubai, UAE
                            </div>

                            <div className='OfficeCardDetailsCont'>
                                <FaPhoneAlt style={{ color: '#fd4238', fontSize: '16px' }} />
                                800 DULSCO (385726)
                            </div>

                            <div className='OfficeCardDetailsCont'>
                                <FaPhoneAlt style={{ color: '#fd4238', fontSize: '16px' }} />
                                +971 4 3404660
                            </div>

                            <div className='OfficeCardDetailsCont'>
                                <IoMail style={{ color: '#fd4238', fontSize: '16px' }} />
                                dulsco@dulsco.com
                            </div>

                            <div className='OfficeCardDetailsCont'>
                                GET DIRECTIONS
                            </div>
                        </div>
                        <div className='OfficeCardCont'>
                            <div>
                                <img src={Agr} alt="" />
                            </div>

                            <div className='OfficeCardHeadText'>
                                HEAD OFFICE
                            </div>

                            <div className='OfficeCardDetailsCont'>
                                <IoLocationSharp style={{ color: '#fd4238', fontSize: '32px' }} />
                                26th Street, Al Quoz Industrial Area 4
                                P.O Box 6238
                                Dubai, UAE
                            </div>

                            <div className='OfficeCardDetailsCont'>
                                <FaPhoneAlt style={{ color: '#fd4238', fontSize: '16px' }} />
                                800 DULSCO (385726)
                            </div>

                            <div className='OfficeCardDetailsCont'>
                                <FaPhoneAlt style={{ color: '#fd4238', fontSize: '16px' }} />
                                +971 4 3404660
                            </div>

                            <div className='OfficeCardDetailsCont'>
                                <IoMail style={{ color: '#fd4238', fontSize: '16px' }} />
                                dulsco@dulsco.com
                            </div>

                            <div className='OfficeCardDetailsCont'>
                                GET DIRECTIONS
                            </div>
                        </div>
                    </div>
                </div>

                {/* footer */}

                <Footer />
            </div>
        </div>
    )
}

export default ContactUs