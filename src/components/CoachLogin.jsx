import React from 'react'

const CoachLogin = () => {
  return (
    <main className='w-full h-[calc(100%-12vh)] bg-gray-300 md:p-20 p-12'>
      <section className='mx-auto w-[80vw] h-[50vh] md:w-[50vw] md:h-[80%] bg-gray-900 rounded'>
        <div className='w-full h-[8vh] overflow-hidden flex justify-center items-center'>
          <h1 className='text-white font-bold text-xl pt-6 md:pt-10'>Login As A Coach</h1>
        </div>
        <form className='w-full h-full items-center mt-16 md:mt-14 flex flex-col gap-6' >
         
          <input type="text" placeholder='Coach ID' className='w-[80%] md:w-[40%] p-2 rounded' />
          <input type="password" placeholder='Password' className='w-[80%] md:w-[40%] p-2 rounded'/>
        <button type='submit' className='w-40 mx-auto mt-2 px-3 py-1 bg-blue-600 rounded-lg text-white font-bold'>Login</button>
        </form>
      </section>
    </main>
  )
}

export default CoachLogin