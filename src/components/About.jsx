import React from 'react'

function About() {
  return (
   <section className="bg-[#F2F2F2] xl:py-28 py-8 px-5">
        <div className="container mx-auto 2xl:px-32 sm:px-16 px-6">

            <div className="mx-auto text-center relative">
                <div class="title-left"></div>
                <h1 className='title'>ABOUT ME</h1>
                <div class="title-right"></div>
            </div>

            <div className='md:flex justify-between items-center gap-12 mt-4'>
                <div className='pe-4 md:mb-0 mb-4'>
                     <p className='mb-4'>I am Nafisa Nitu certified Full stack web developer. I can develop any kind of website.
                    Skilled PHP with Laravel full stack web developer eager to join a creative, problem solving team. Ability to learn and implement new technologies quickly. My skills include HTML5, CSS3, Bootstrap, Tailwind, JavaScript, Vue.js, MySQL, PHP, Laravel.</p>

                    <p className='mb-4'>I have completed B.Sc in Computer Science from City University and have professional experience as a Full Stack web Development, which taught me Programming designing, Development, and problem-solving.</p>

                    <p>I have been working as a Frontend Web Developer at One ICT for 2 years. I have created various types of websites here such as ecommerce, blogs, business, personal</p>
                </div>
                <img src="images/n.png" width={230}  alt="" className='rounded-lg' />
            </div>
        </div>
    </section>
  )
}

export default About