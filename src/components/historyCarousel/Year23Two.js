import React from 'react'
import './HistoryItem.css'

import Y23Two from '../../images/2023Two.webp'

const Year23Two = () => {
    return (
        <div className='HistoryItemWrap'>


            {/* hoverText */}
            <div className='HoverTextCont'>
                <div className='HoverText'>
                    Parisima expands to KSA
                </div>
            </div>

            <div className='HistoryImgCont'>
                <img src={Y23Two} alt="" />
            </div>

            <div className='HistoryYearText'>
                2023
            </div>
        </div>
    )
}

export default Year23Two