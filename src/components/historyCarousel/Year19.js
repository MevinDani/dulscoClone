import React from 'react'
import './HistoryItem.css'

import Y19 from '../../images/2019Img.webp'

const Year19 = () => {
    return (
        <div className='HistoryItemWrap'>


            {/* hoverText */}
            <div className='HoverTextCont'>
                <div className='HoverText'>
                    Dulsco becomes Official Waste Management Partner of Expo 2020 Dubai
                </div>
            </div>

            <div className='HistoryImgCont'>
                <img src={Y19} alt="" />
            </div>

            <div className='HistoryYearText'>
                2019
            </div>
        </div>
    )
}


export default Year19