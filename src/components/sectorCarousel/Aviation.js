import React from 'react'
import './sectorItem.css'
import plusIcon from '../../images/plus-icon.png'

const Aviation = () => {
    return (
        <div className='AviationCont'>


            <div className='SectorCarouselBottomCont'>
                <div className='SectorCarouselText'>
                    Aviation
                </div>
                <div>
                    <img src={plusIcon} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Aviation