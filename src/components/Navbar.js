import React, { useState } from 'react'
import './NavBar.css'
import { IoIosArrowDown } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {

    const location = useLocation();
    const isRootPage = location.pathname === "/";

    const navigate = useNavigate()

    const [showSearchBar, setShowSearchBar] = useState(false)

    const [showNavMenu, setShowNavMenu] = useState(false)
    return (
        <>
            <div className='NavBarWrap'>

                <div className='' style={{ paddingLeft: '12px', color: '#fd4238' }}>
                    DULSCO
                </div>

                <div className={`NavPcViewItem ${location.pathname === "/" ? "active" : ""}`} onClick={() => navigate('/')}>
                    Home
                </div>

                <div className={`NavBarDrop NavPcViewItem ${location.pathname === "/about-us" ? "active" : ""}`}
                    onClick={() => navigate('/about-us')}>
                    About Us
                    <div style={{
                        marginTop: '8px'
                    }}> <IoIosArrowDown /></div>
                </div>

                <div className='NavBarDrop NavPcViewItem'>
                    What We Do
                    <div style={{
                        marginTop: '8px'
                    }}> <IoIosArrowDown /></div>
                </div>

                <div className='NavBarDrop NavPcViewItem'>
                    Sectors
                    <div style={{
                        marginTop: '8px'
                    }}> <IoIosArrowDown /></div>
                </div>

                <div className='NavBarDrop NavPcViewItem'>
                    Social Impact
                    <div style={{
                        marginTop: '8px'
                    }}> <IoIosArrowDown /></div>
                </div>

                <div className='NavPcViewItem'>
                    Media Centre
                </div>

                <div className='NavPcViewItem'>
                    Careers
                </div>

                <div className='NavPcViewItem'>
                    Contact Us
                </div>

                <div style={{ paddingRight: '12px' }}>
                    <div className='NavBarLensWrap NavPcViewItem' onClick={() => setShowSearchBar(!showSearchBar)}>

                        {
                            showSearchBar ?
                                <IoMdClose />
                                :
                                <IoSearchOutline />
                        }
                    </div>
                </div>

                <div className='NavBarRightMobItem'>

                    <div className='NavBarLensWrap'>

                        {
                            showSearchBar ?
                                <div onClick={() => setShowSearchBar(!showSearchBar)}> <IoMdClose /></div>
                                :
                                <div onClick={() => setShowSearchBar(!showSearchBar)}>  <IoSearchOutline /></div>
                        }
                    </div>
                    <div onClick={() => setShowNavMenu(!showNavMenu)}>
                        <RxHamburgerMenu />
                    </div>
                </div>

                {/* serachBar */}

                {
                    showSearchBar &&
                    <div className='NavSearchBar'>
                        <input className='NavSearchInput' type="text" placeholder='Search' />
                    </div>
                }

            </div>


            {/* navMenu */}

            {

                showNavMenu &&

                <div className='NavBarMenu'>

                    <div className='NavBarMenuCloseCont'>
                        <div onClick={() => setShowNavMenu(false)}>
                            <IoMdClose fontSize={40} color='red' />
                        </div>
                    </div>

                    <div className='NavBarMenuItemsCont'>
                        <div className='NavBarMenuItems' onClick={() => {
                            navigate('/')
                            setShowNavMenu(false)
                        }}>Home</div>

                        <div className='NavBarMenuItems' onClick={() => {
                            navigate('/about-us')
                            setShowNavMenu(false)
                        }}>
                            About Us<div><IoIosArrowDown /></div>
                        </div>
                        <div className='NavBarMenuItems'>What We Do<div><IoIosArrowDown /></div></div>
                        <div className='NavBarMenuItems'>Sectors<div><IoIosArrowDown /></div></div>
                        <div className='NavBarMenuItems'>Social Impact<div><IoIosArrowDown /></div></div>
                        <div className='NavBarMenuItems'>Media Centre</div>
                        <div className='NavBarMenuItems'>Careers</div>
                        <div className='NavBarMenuItems'> Contact Us</div>
                    </div>

                </div>
            }
        </>
    )
}

export default Navbar