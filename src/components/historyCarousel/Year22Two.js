import React from 'react'
import './HistoryItem.css'

import Y22Two from '../../images/2022Two.webp'

const Year22Two = () => {
    return (
        <div className='HistoryItemWrap'>


            {/* hoverText */}
            <div className='HoverTextCont'>
                <div className='HoverText'>
                    Dulsco launched Refuse Derived Fuel Facility (RDF) at Expo 2020 Dubai
                </div>
            </div>

            <div className='HistoryImgCont'>
                <img src={Y22Two} alt="" />
            </div>

            <div className='HistoryYearText'>
                2022
            </div>
        </div>
    )
}

export default Year22Two