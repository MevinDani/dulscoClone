import React from 'react'
import './HistoryItem.css'

import Y211 from '../../images/2021One.webp'

const Year21One = () => {
    return (
        <div className='HistoryItemWrap'>


            {/* hoverText */}
            <div className='HoverTextCont'>
                <div className='HoverText'>
                    ‘The New Old and Reloved by Dulsco’ is launched
                </div>
            </div>

            <div className='HistoryImgCont'>
                <img src={Y211} alt="" />
            </div>

            <div className='HistoryYearText'>
                2021
            </div>
        </div>
    )
}

export default Year21One