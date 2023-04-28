import React from 'react'

export default function Reel ({ reelItem, selectedReel, spinner }) {
    return (
        <div className="slot__reel">
            <div className="slot__reel-each">
                <div className={spinner ? "slot__reel-carousel" : "slot__reel-carousel slot__reel-carousel--stop"}>
                    { selectedReel && reelItem.map((each, index) => (
                        <div key={index} className={index === selectedReel.index ? "slot__reel-cell slot__reel-cell--selected" : "slot__reel-cell"}>
                            {each}
                        </div>
                    ))}                    
                </div>
            </div>
        </div>
    )
}