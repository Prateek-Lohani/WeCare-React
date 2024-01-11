import React from 'react'
import HomeCard from './HomeCard'

const Home = () => {



    const data=[{
        image:'/img1.png',
        btnInfoI:'Login as a Coach',
        btnInfoII:'Join as a Coach',
        btnIlink:'/CoachLogin',
        btnIIlink:'/CoachSignup',
      },{
        image:'/img2.png',
        btnInfoI:'Login as a User',
        btnInfoII:'Join as a User',
        btnIlink:'/UserLogin',
        btnIIlink:'/UserSignup',
      }
    ]

  return (
    <main className='w-full md:h-[calc(100%-12vh)] bg-gray-300'>
        <header className='w-full'>
            <h1 className='text-lg md:text-4xl capitalize text-center pt-12 font-semibold'>
                We are at the heart of appropriate care
            </h1>
            <section className='w-fit mx-auto flex flex-col gap-8 p-4  md:flex-row md:gap-24 mt-16'>
                {
                data.map((btndata)=>{
                    return <HomeCard key={btndata.image} btndata={btndata}/>
                })
                }
            </section>
        </header> 
    </main>
  )
}

export default Home
