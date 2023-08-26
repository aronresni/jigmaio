import React from 'react'
import "animate.css"

const Header = () => {
    return (
        <div className='background flex flex-col items-center'>
            <h1 className=" text-center text-white text-[28px] xs:text-[30px] sm:text-[38px] md:text-[48px] lg:text-[56px] font-semibold">
                Pay as you go<br />No up front commitment</h1>
            <div className="text-center mt-4 text-white xs:text-[10px] sm:text-[14px] md:text-[18px] lg:text-[24px] font-Inter l">The latest in generative AI with a transparent pricing model<br /> that scales with your needs.</div>

        </div>
    )
}

export default Header
