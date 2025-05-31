import React from 'react'

function Experience() {
  return (
   <section className="xl:py-28 py-8 px-5">
        <div className="container mx-auto 2xl:px-32 sm:px-16 px-6">

            <div className="mx-auto text-center relative">
                <div class="title-left"></div>
                <h1 className='title'>Experience</h1>
                <div class="title-right"></div>
            </div>

           <div className='flex flex-col md:gap-16 gap-6 md:pt-12 pt-6'>
            <div className='flex flex-col md:flex-row gap-8'>
                <div className='w-full md:w-[600px] flex flex-col justify-center  items-center md:items-end gap-4 border-gray-500 md:border-r-2 pr-0 md:pr-8 '>
                   <div className='border-b-2 border-gray-500 pb-4 mb-4 flex flex-col md:items-end items-center text-center md:text-right'>
                     <h2 className='text-2xl font-semibold'>Frontend Developer</h2>
                     <p className=''>ONE ICT LTD.</p>
                   </div>

                    <p className=''>May 2023 - Present</p>
                </div>
                <div className='ps-4'>
                     <ul className='list-disc flex flex-col justify-center items-start gap-4'>
                        <li>Implement new functionalities and features that enhance the user experience, such as interactive forms, dynamic elements, and custom widgets. </li>
                        <li>Use markup languages like HTML to create user-friendly web pages</li>
                        <li>Maintain and improve website</li>
                        <li>Collaborate with back-end developers and web designers to improve usability</li>
                        <li>Get feedback from, and build solutions for, users and customers</li>
                       
                     </ul>
                </div>
            </div>

            <div className='flex flex-col md:flex-row gap-8'>
                
                <div className='pe-4'>
                     <ul className='list-disc flex flex-col justify-center items-start gap-4'>
                        <li>Implement new functionalities and features that enhance the user experience, such as interactive forms, dynamic elements, and custom widgets. </li>
                        <li>Use markup languages like HTML to create user-friendly web pages</li>
                        <li>Maintain and improve website</li>
                        <li>Collaborate with back-end developers and web designers to improve usability</li>
                        <li>Get feedback from, and build solutions for, users and customers</li>
                       
                     </ul>
                </div>
                <div className='w-full md:w-[600px] flex flex-col justify-center items-start gap-4 border-gray-500 md:border-l-2 pl-0 md:pl-8 '>
                   <div className='border-b-2 border-gray-500 pb-4 mb-4 flex flex-col md:items-start items-center text-center md:text-right'>
                     <h2 className='text-2xl font-semibold'>Frontend Developer</h2>
                     <p className=''>ONE ICT LTD.</p>
                   </div>

                    <p className=''>May 2023 - Present</p>
                </div>
            </div>
            </div> 

             
        </div>
    </section>
  )
}

export default Experience