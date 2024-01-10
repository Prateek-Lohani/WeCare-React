import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Routing from './utils/Routing'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main className='w-full h-full relative'>
        <Navbar />
        <Routing/>
        
        <Footer/>
      </main>  
    </>
  )
}

export default App
