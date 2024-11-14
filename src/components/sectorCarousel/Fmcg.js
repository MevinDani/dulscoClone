import React from 'react'
import './sectorItem.css'
import plusIcon from '../../images/plus-icon.png'

const Fmcg = () => {
    return (
        <div className='FMCGCont'>


            <div className='SectorCarouselBottomCont'>
                <div className='SectorCarouselText'>
                    FMCG
                </div>
                <div>
                    <img src={plusIcon} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Fmcg