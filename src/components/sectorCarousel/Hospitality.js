import React from 'react'
import './sectorItem.css'
import plusIcon from '../../images/plus-icon.png'

const Hospitality = () => {
    return (
        <div className='HospitalityCont'>


            <div className='SectorCarouselBottomCont'>
                <div className='SectorCarouselText'>
                    HOSPITALITY
                </div>
                <div>
                    <img src={plusIcon} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Hospitality