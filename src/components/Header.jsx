import React, { useState } from 'react'
import { RxCaretDown } from "react-icons/rx";
export default function Header() {


    const [toggle, setToggle] = useState(false);
    const showSideMenu = () => {
        setToggle(true);
    }

    return (
        <>
            <div className='black-overlay w-full h-full fixed duration-500' style={{
             opacity: toggle ? 1 : 0
         }}></div>   
         <header className='p-[15px] shadow-xl text-[#686B78]'>
                <div className='max-w-[1200px] mx-auto border border-red-500 flex items-center'>
                    <div className='w-[100px] '>
                        <img src='images/swiggy.png' className='w-full' alt='' />
                    </div>
                    <div>
                        <span className='font-bold border-b-[3px] border-[black]'>
                            Ratanada
                        </span> Jodhpur, Rajasthan, India <RxCaretDown onClick={showSideMenu} fontSize={25} className='inline font-bold text-[#fc8019]'/>
                    </div>
                </div>
         </header>
       </>
    )
}