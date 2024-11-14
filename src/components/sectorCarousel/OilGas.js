import React from 'react'
import './sectorItem.css'
import plusIcon from '../../images/plus-icon.png'

const OilGas = () => {
    return (
        <div className='OilGasCont'>


            <div className='SectorCarouselBottomCont'>
                <div className='SectorCarouselText'>
                    Oil & Gas
                </div>
                <div>
                    <img src={plusIcon} alt="" />
                </div>
            </div>
        </div>
    )
}

export default OilGas