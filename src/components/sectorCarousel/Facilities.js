import React from 'react'
import './sectorItem.css'
import plusIcon from '../../images/plus-icon.png'

const Facilities = () => {
    return (
        <div className='FacilitiesCont'>


            <div className='SectorCarouselBottomCont'>
                <div className='SectorCarouselText'>
                    Facilities Management
                </div>
                <div>
                    <img src={plusIcon} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Facilities