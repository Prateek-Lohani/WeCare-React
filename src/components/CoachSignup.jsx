import React from 'react'

const CoachSignup = () => {
  return (
    <main className='w-full h-[calc(100%-12vh)] bg-gray-300 md:p-20 p-12'>
    <section className='mx-auto w-[80vw] h-[77vh] md:w-[55vw] md:h-[72vh] bg-gray-900 rounded-md'>
      <div className='w-full h-[8vh] overflow-hidden flex justify-center items-center'>
        <h1 className='text-white font-bold text-xl md:text-2xl capitalize'>Coach Signup</h1>
      </div>
      <div className='w-full h-[calc(100%-8vh)] md:pt-0 pt-4 px-6 text-white'>
        <form className='w-full h-full flex flex-col gap-y-2 md:w-[70%] md:mx-auto'>
      <label htmlFor='name'>Name </label>
      <input type='text' name='name' id='name' placeholder='Enter Name' className='px-2 text-gray-900 rounded'/>
      <label htmlFor='password'>Password </label>
      <input type='password' name='password' id='password' placeholder='Enter Password' className='text-gray-900 px-2 rounded'/>
        <label htmlFor="dob" >Date of Birth </label>
        <input type="date" className='px-2 rounded text-gray-500'/>
        <div className='flex flex-col'>
        <h1>Gender</h1>
        <div className='flex gap-4 mx-auto'>
        <label htmlFor='male'>Male</label>
        <input type="radio" name='gender' id='male' value='Male'/>
        <label htmlFor='female'>Female</label>
        <input type="radio" name='gender' id='female' value='Female'/>
        </div>
        </div>
        <label htmlFor='phone'>Phone Number</label>
        <input type="text" className='px-2 rounded text-gray-900'/>
        <label htmlFor="speciality">Speciality</label>
        <input type="text" placeholder='Enter Speicality' className='px-2 rounded text-gray-900'/>
        <button type='submit' className='w-40 mx-auto mt-2 px-3 py-1 bg-blue-600 rounded-lg'>Register</button>
        </form>
      </div>
    </section>
  </main>
   )
}

export default CoachSignup