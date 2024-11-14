import React from 'react'
import './sectorItem.css'
import plusIcon from '../../images/plus-icon.png'

const Agriculture = () => {
    return (
        <div className='AgricultureCont'>


            <div className='SectorCarouselBottomCont'>
                <div className='SectorCarouselText'>
                    AGRICULTURE
                </div>
                <div>
                    <img src={plusIcon} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Agriculture