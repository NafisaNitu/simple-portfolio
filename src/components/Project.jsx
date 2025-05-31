import React from 'react'

function Project() {
  return (
   <section className="bg-[#F2F2F2] xl:py-28 py-8 px-5">
        <div className="container mx-auto 2xl:px-32 sm:px-16 px-6">

            <div className="mx-auto text-center relative">
                <div class="absolute left-0 top-5 bg-[#9CA3AF] lg:h-[1px] md:h-1 2xl:w-[430px] xl:w-[370px] lg:w-[220px]"></div>
                <h1 className='title'>FEATURED PROJECTS</h1>
                <div class="absolute right-0 top-5 bg-[#9CA3AF] lg:h-[1px] md:h-1 2xl:w-[430px] xl:w-[370px] lg:w-[220px]"></div>
            </div>

           <div className='flex flex-col md:gap-16 gap-6 md:pt-12 pt-6'>

          <div class="flex flex-col md:flex-row xl:gap-16 gap-8 items-center md:justify-between w-full">
              
              <div className='md:w-1/2'>
              <img alt="" class="rounded-md w-full md:h-[400px]" src="images/2.png"/>
              </div>
              <div class="flex flex-col justify-center items-center md:items-start gap-4 md:w-1/2" >
                <div class="flex flex-col gap-2 border-b-2 border-gray-600 pb-2">
                  <h3 class="md:text-3xl text-xl font-semibold pb-4">No Chinta Website</h3>
                  <p class="">No Chinta Home Healthcare: Your Partner In Comfort, Care & Convenience. Offering comprehensive health checkups, premium home nursing, personalized physiotherapy, reliable babysitting, and dedicated caregiving. Our expert team of doctors, nurses, and specialist therapists at No Chinta is dedicated to improving well-being, safety, and independence, all from the comfort of your home</p>
                  </div>
                  <div class="flex flex-wrap gap-4">
                    <p class="">HTML</p>
                    <p class="">CSS</p>
                    <p class="">Tailwind</p>
                    <p class="">JavaScript</p>
                    <p class="">Vue.js</p>
                    <p class="">Figma</p>
                    </div>
                    <div class="flex gap-4">
                      <a class="text-2xl text-gray-800" href="https://github.com/one-ict-ltd/No-Chinta-Web-Site" target="_blank">
                        <i class="fa-brands fa-github"></i>
                      </a>
                      <a class="text-xl text-gray-800" href="https://www.nochinta.xyz/" target="_blank">
                        <i class="fa-solid fa-arrow-up-right-from-square"></i>
                      </a>
                    </div>
                  </div>
                  
            </div>

            <div class="flex flex-col md:flex-row xl:gap-16 gap-8 items-center justify-between w-full md:mt-8">
              
              <div class="flex flex-col justify-center items-center md:items-start gap-4 md:w-1/2" >
                <div class="flex flex-col gap-2 border-b-2 border-gray-600 pb-2">
                  <h3 class="md:text-3xl text-xl font-semibold pb-4">Pharmaceuticals Website</h3>
                  <p class="">Pharmaceuticals Website for One Pharma ltd. One Pharma Ltd. embarked on its pioneering journey in November 2015 with a focus on incorporating cutting-edge manufacturing technology and producing globally acclaimed pharmaceutical products for the patients of Bangladesh and beyond.</p>
                  </div>
                  <div class="flex flex-wrap gap-4">
                    <p class="">HTML</p>
                    <p class="">CSS</p>
                    <p class="">Tailwind</p>
                    <p class="">JavaScript</p>
                    <p class="">Vue.js</p>
                    <p class="">Figma</p>
                    </div>
                    <div class="flex gap-4">
                      <a class="text-2xl text-gray-800" href="https://github.com/one-ict-ltd/OPL-WEBSITE" target="_blank">
                        <i class="fa-brands fa-github"></i>
                      </a>
                      <a class="text-xl text-gray-800" href="https://www.onepharmaltd.com/" target="_blank">
                        <i class="fa-solid fa-arrow-up-right-from-square"></i>
                      </a>
                    </div>
                  </div>
                  <div className='md:w-1/2'>
              <img alt="" class="rounded-md w-full md:h-[400px]" src="images/1.png"/>
              </div>
            </div>

            </div> 

             
        </div>
    </section>
  )
}

export default Project