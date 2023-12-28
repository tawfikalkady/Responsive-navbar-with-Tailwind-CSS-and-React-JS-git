import React, { useEffect, useState } from 'react';
//import icons
import { HiMenu } from "react-icons/hi";


const Navbar = () => {
    const [isMenuOpen,setIsMenuOpen]=useState(false)
    const [isSticky,setIsSticky]=useState(false)
    const togggleMenu=() => {
        setIsMenuOpen(!isMenuOpen)
    }

    useEffect(() => {
        const handleScroll=() => {
            if(window.scrollY > 0){
                setIsSticky(true)
            }
        }
        window.addEventListener('scroll',handleScroll)
    }, [])
    return (
        <header className='w-full fixed top-0 left-0 right-0 border-b-2 '>
            <nav className={`py-4 md:px-8 px-4 bg-white ${isSticky ? 'sticky top-0 right-0 left-0 bg-white ' : '' } `} >
                <div className='flex items-center justify-between'>
                    <div className='font-bold text-2xl cursor-pointer text-black'>
                        <a href="/">Logo</a>
                    </div>
                    {/* for larger devices */}
                    <div className='lg:flex items-center gap-3 hidden text-stone-700 '>
                        <a href="/" className='block hover:text-gray-400 py-2 px-4 '>Home</a>
                        <a href="/" className='block hover:text-gray-400 py-2 px-4 '>Portfoloio</a>
                        <a href="/" className='block hover:text-gray-400 py-2 px-4 '>About me</a>
                        <a href="/" className='block hover:text-gray-400 py-2 px-4 '>Testimonials</a>
                    </div>
                    {/* contact me btn */}
                    <div className='lg:block hidden'>
                        <button className='btnOutline '>Contact Me</button>
                    </div>
                    {/* menu btn for small devices */}
                    <button onClick={togggleMenu} className='lg:hidden text-indigo-600 text-3xl'>
                        <HiMenu/>
                    </button>
                </div>           
                {/* nav items for small devices */}
                {isMenuOpen && (
                    <div className='mt-4 bg-indigo-500 text-white rounded py-4'>
                        <a href="/" className='block hover:text-gray-400 py-2 px-4'>Home</a>
                        <a href="/" className='block hover:text-gray-400 py-2 px-4'>Portfolio</a>
                        <a href="/" className='block hover:text-gray-400 py-2 px-4'>About me</a>
                        <a href="/" className='block hover:text-gray-400 py-2 px-4'>Testimonials</a>
                    </div>
                )
                }
            </nav>
        </header>
    );
};

export default Navbar;