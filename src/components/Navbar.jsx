import React from 'react'
import { LuPhone } from "react-icons/lu";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
        <nav className='w-full px-6 py-4 h-[8vh] bg-gray-900 flex justify-between items-center'>
            <section className='nav-left'>
            <Link to="/"><h1 className='text-white font-extrabold text-xl hover:cursor-pointer'>
                    WeCare</h1></Link>
            </section>
            <section className='nav-right'>
                    <h3 className='text-white hidden md:flex '><LuPhone className='text-lg'/><p className='ml-3'>Call Us: 080 2233447</p></h3>
            </section>
        </nav>

    </>
  )
}

export default Navbar