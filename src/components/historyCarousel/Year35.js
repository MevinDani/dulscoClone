import React from 'react'
import './HistoryItem.css'

import Y35 from '../../images/1935Img.webp'

const Year35 = () => {
    return (
        <div className='HistoryItemWrap'>


            {/* hoverText */}
            <div className='HoverTextCont'>
                <div className='HoverText'>
                    Dulsco embarks on a journey of stevedoring and worker supply
                </div>
            </div>

            <div className='HistoryImgCont'>
                <img src={Y35} alt="" />
            </div>

            <div className='HistoryYearText'>
                1935
            </div>
        </div>
    )
}

export default Year35