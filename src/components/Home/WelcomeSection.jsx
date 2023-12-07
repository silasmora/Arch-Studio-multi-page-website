import React from 'react'
import { welcome } from '../../../starter-code/assets/imageIndex'

export const WelcomeSection = () => {
  return (
    <div className='pt-[141px] px-8 pb-[113px] md:pt-[89px] md:pb-[233px] lg:pb-[200px] lg:pt-[109px] lg:max-w-[1400px] md:px-0'>
      <h1 className='hidden md:block text-veryLightGrey font-bold md:text-[20vw] lg:text-[250px] leading-[200px] -tracking-[3px] -mb-20 md:-mb-10 lg:-mb-[40px] relative'>Welcome</h1>
      <div className='flex justify-between'>
        <div className='flex flex-col gap-[22px] md:gap-[43px] lg:ml-[180px]'>
          <h2 className='text-veryDarkBlue text-[48px] font-bold leading-[52px] -tracking-[1.7px] md:text-[72px] md:leading-[64px] md:-tracking-[2px] md:w-2/3'>Welcome to Arch Studio</h2>

          <p className='text-darkGray text-[18px] font-medium leading-6 md:w-[95%] lg:w-[83%]'>We have a unique network and skillset to help bring your projects to life. Our 
          small team of highly skilled individuals combined with our large network put us 
          in a strong position to deliver exceptional results.
          <br />
          <br />
          Over the past 10 years, we have worked on all kinds of projects. From stations 
          to high-rise buildings, we create spaces that inspire and delight.
          <br />
          <br />
          We work closely with our clients so that we understand the intricacies of each 
          project. This allows us to work in harmony the surrounding area to create truly 
          stunning projects that will stand the test of time.
          </p>
        </div>
        <img className='hidden lg:block -mt-[70px]' src={welcome} alt="Welcome" />
      </div>

    </div>
  )
}
