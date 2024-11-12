import React from 'react'
import './NavBar.css'
import { IoIosArrowDown } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";

const Navbar = () => {
    return (
        <div className='NavBarWrap'>

            <div>
                DULSCO
            </div>

            <div>
                Home
            </div>

            <div className='NavBarDrop'>
                About Us
                <div style={{
                    marginTop: '8px'
                }}> <IoIosArrowDown /></div>
            </div>

            <div className='NavBarDrop'>
                What We Do
                <div style={{
                    marginTop: '8px'
                }}> <IoIosArrowDown /></div>
            </div>
            <div className='NavBarDrop'>
                Sectors
                <div style={{
                    marginTop: '8px'
                }}> <IoIosArrowDown /></div>
            </div>

            <div className='NavBarDrop'>
                Social Impact
                <div style={{
                    marginTop: '8px'
                }}> <IoIosArrowDown /></div>
            </div>
            <div>
                Media Centre
            </div>

            <div>
                Careers
            </div>

            <div>
                Contact Us
            </div>

            <div className='NavBarLensWrap'>
                <IoSearchOutline />
            </div>

        </div>
    )
}

export default Navbar