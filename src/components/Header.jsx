import React, { useState } from 'react'
import { RxCaretDown } from "react-icons/rx";
import { IoIosSearch } from "react-icons/io";
import { RiDiscountPercentFill } from "react-icons/ri";
import { IoCart } from "react-icons/io5";
import { MdFollowTheSigns } from "react-icons/md";
import { IoMdHelpCircle } from "react-icons/io";

export default function Header() {


    const [toggle, setToggle] = useState(false);
    const showSideMenu = () => {
        setToggle(true);
    }

    const hideSideMenu = () => {
        setToggle(false);
    }

    return (
        <>
            <div className='black-overlay w-full h-full fixed duration-500' onClick={hideSideMenu} style={{
                opacity: toggle ? 1 : 0,
                visibility: toggle ? "visible" : "hidden"
            }}>
                <div onClick={(e) => {
                    e.stopPropagation();
                }} className='w-[400px] bg-white h-full absolute duration-[400ms]'
                    style={{
                         left: toggle ? '0%' : '-100%'
                    }}
                ></div>
            </div>   
         <header className='p-[15px] shadow-xl text-[#686B78]'>
                <div className='max-w-[1200px] mx-auto border border-red-500 flex items-center'>
                    <div className='w-[100px] '>
                        <img src='images/swiggy.png' className='w-full' alt='' />
                    </div>
                    <div>
                        <span className='font-bold border-b-[3px] border-[black]'>
                            Ratanada
                        </span> Jodhpur, Rajasthan, India <RxCaretDown fontSize={25} className='inline font-bold text-[#fc8019]
                         cursor-pointer' onClick={showSideMenu}/>
                    </div>
                    <nav className='flex gap-7 ml-auto font-bold text-[18px] cursor-pointer'>
                        <li className='flex items-center gap-1 hover:text-[#fc8015] '>
                            <IoIosSearch/>
                           Search
                        </li>
                        <li className='flex items-center gap-1 hover:text-[#fc8015]'>
                            <RiDiscountPercentFill/>
                            Offers
                        </li>
                        <li className='flex items-center gap-1 hover:text-[#fc8015]'>
                            <IoMdHelpCircle/>
                            Help
                        </li>
                        <li className='flex items-center gap-1 hover:text-[#fc8015]'>
                            <MdFollowTheSigns />
                            Sign-In
                        </li>
                        <li className='flex items-center gap-1 hover:text-[#fc8015]'>
                            <IoCart />
                           Cart
                        </li>
                    </nav>
                </div>
         </header>
       </>
    )
}