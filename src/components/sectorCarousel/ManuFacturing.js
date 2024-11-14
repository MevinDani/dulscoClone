import React from 'react'
import './sectorItem.css'
import plusIcon from '../../images/plus-icon.png'

const ManuFacturing = () => {
    return (
        <div className='ManuFacturingCont'>


            <div className='SectorCarouselBottomCont'>
                <div className='SectorCarouselText'>
                    Manufacturing
                </div>
                <div>
                    <img src={plusIcon} alt="" />
                </div>
            </div>
        </div>
    )
}

export default ManuFacturing