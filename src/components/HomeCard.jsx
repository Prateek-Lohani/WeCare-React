import React from 'react'
import { Link } from 'react-router-dom'
import Routing from '../utils/Routing'


const HomeCard = ({btndata}) => { 

   
    return (
    <article className='md:h-full p-6 mx-auto h-content w-60 md:w-80 bg-gray-900 rounded-lg overflow-hidden'>
        <div className='mx-auto img-container w-40 h-40 flex items-center justify-center overflow-hidden rounded-full'>
            <img className='pl-8 w-full h-full object-cover' src={btndata.image} alt="" />
        </div>
        <div className='w-full text-white flex flex-col items-center pt-6 gap-10 h-44' >

        <Link to={btndata.btnIlink}>
        <button className='w-44 px-3 py-1 bg-blue-800 rounded-lg'>{btndata.btnInfoI}</button>
        </Link>
        <Link to={btndata.btnIIlink}>
<button className='w-44 px-3 py-1 bg-blue-800 rounded-lg'>{btndata.btnInfoII}</button>
        </Link>
        </div>
    </article>
  )
}

export default HomeCard