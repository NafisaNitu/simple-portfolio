import React from 'react'

function Navbar() {
  return (
   <nav className="bg-white shadow sticky top-0 z-50">
      <div className="container-fluid mx-auto 2xl:px-20 sm:px-16 px-6 py-3">
        <div className="md:flex justify-between items-center">
         <div className="md:flex items-center">
            <h1 className='font-bold text-[#ea4c89]'>PORTFOLIO</h1>
            {/* <h1 className='font-bold bg-gradient-to-r from-purple-500 via-pink-400 to-pink-500 inline-block text-transparent bg-clip-text '>PORTFOLIO</h1> */}
          </div>

          <ul className="block md:flex items-center xl:space-x-10 sm:space-x-6">
            <li className='navbar-text'> <a href="#">About</a></li>
            <li className='navbar-text'> <a href="#">Experience</a></li>
            <li className="navbar-text"><a href="#">Project</a></li>
            <li className="navbar-text"><a href="#">Contact</a></li>
          </ul>

        <div className='flex gap-4'>
          <a href="" className='btn'>Resume</a>
          <a href="" className='btn'>Hire Me</a>
        </div>
         
        </div>
      </div>
    </nav>
  )
}

export default Navbar