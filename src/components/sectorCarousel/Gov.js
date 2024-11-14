import React from 'react'
import './sectorItem.css'
import plusIcon from '../../images/plus-icon.png'

const Gov = () => {
    return (
        <div className='GovtUtilCont'>


            <div className='SectorCarouselBottomCont'>
                <div className='SectorCarouselText'>
                    Govt. & Utilities
                </div>
                <div>
                    <img src={plusIcon} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Gov