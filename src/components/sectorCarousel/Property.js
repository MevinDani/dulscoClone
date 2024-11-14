import React from 'react'
import './sectorItem.css'
import plusIcon from '../../images/plus-icon.png'

const Property = () => {
    return (
        <div className='PropDevs'>


            <div className='SectorCarouselBottomCont'>
                <div className='SectorCarouselText'>
                    Property developers
                </div>
                <div>
                    <img src={plusIcon} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Property