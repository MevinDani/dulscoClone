import React from 'react'
import './sectorItem.css'
import plusIcon from '../../images/plus-icon.png'

const ItTelecoms = () => {
    return (
        <div className='ItTeleComCont'>


            <div className='SectorCarouselBottomCont'>
                <div className='SectorCarouselText'>
                    IT and telecoms
                </div>
                <div>
                    <img src={plusIcon} alt="" />
                </div>
            </div>
        </div>
    )
}

export default ItTelecoms