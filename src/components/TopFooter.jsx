import React from 'react'

function TopFooter() {
  return (
   <footer className="bg-[#F2F2F2] xl:py-28 py-8 px-5">
        <div className="container mx-auto 2xl:px-32 sm:px-16 px-6">

            <div className="mx-auto text-center relative">
                <div class="title-left"></div>
                <h1 className='title'>Contact</h1>
                <div class="title-right"></div>
            </div>

            <div className='flex justify-center text-center items-center gap-12 mt-4'>
                <form class="w-full max-w-3xl space-y-6 px-4 sm:px-12 py-8" >
                    <p className='text-gray-600 mb-6'>I am currently seeking employment, and I would appreciate it if you could contact me with any available job opportunities.</p>

                    <button type="submit" class="btn text-gray-600 hover:bg-gray-700 hover:text-white text-2xl px-6 w-full sm:w-fit ">
                      <a href="#" className='text-lg '>Write Message</a>
                    </button>
                </form>
            </div>

            <div class="flex justify-center text-center items-center gap-4">
                      <a class="text-2xl text-gray-800" href="https://github.com/NafisaNitu" target="_blank">
                        <i class="fa-brands fa-github"></i>
                      </a>
                      <a class="text-xl text-gray-800" href="https://www.linkedin.com/in/nafisanitu/" target="_blank">
                        <i class="fa-brands fa-linkedin-in"></i>
                      </a>
                    </div>
        </div>
    </footer>
  )
}

export default TopFooter