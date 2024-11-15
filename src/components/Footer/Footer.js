import React from 'react'
import './Footer.css'

import footerIcon1 from '../../images/footerIcon1.webp'
import footerIcon2 from '../../images/footerIcon2.webp'

import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";


const Footer = () => {
    return (
        <div className='FooterWrap'>

            <div className='FooterTopCont'>
                <div className='FooterQuickLinksCont'>
                    <div className='FooterContHeadText'>
                        QUICK LINKS
                    </div>

                    <div className='FooterLinksCont'>

                        <div>Home</div>
                        <div>Media Centre</div>
                        <div>About Us</div>
                        <div>Careers</div>
                        <div>What We Do</div>
                        <div>Contact Us</div>
                        <div>Sectors</div>
                        <div>Social Impact</div>
                    </div>
                </div>

                <div className='FooterLocationCont'>
                    <div className='FooterContHeadText'>
                        LOCATIONS
                    </div>

                    <div className='FooterLocationItems'>
                        <div>UAE</div>
                        <div>UK</div>
                        <div>KSA</div>
                        <div>Careers</div>
                        <div>Abu Dhabi</div>
                        <div>Aberdeen</div>
                        <div>Riyadh</div>
                        <div>Dubai</div>
                        <div>Edinburgh</div>
                        <div>Ras AL Khaimah</div>
                        <div>Fujairah</div>
                    </div>
                </div>

                <div className='FooterIconsCont'>
                    <div>
                        <img className='FooterImg1' src={footerIcon1} alt="" />
                    </div>
                    <div>
                        <img className='FooterImg2' src={footerIcon2} alt="" />
                    </div>
                </div>
            </div>

            <div className='FooterBottomCont'>

                <div className='FooterCopyText'>© Copyright 2023. Dulsco . All Rights Reserved</div>

                <div className='FooterSocialCont'>
                    <div>Site Map</div>
                    <div>Privacy Policy</div>

                    <div className='FooterSocialItemCont'>

                        <div>
                            MEDIA:
                        </div>
                        <div>
                            <FaFacebookF />
                        </div>
                        <div>
                            <FaInstagram />
                        </div>
                        <div>
                            <FaLinkedin />
                        </div>
                        <div>
                            <FaYoutube />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer