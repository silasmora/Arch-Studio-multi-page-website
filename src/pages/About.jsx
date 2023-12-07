import React from 'react'
import FirstSection from '../components/About/FirstSection'
import TheLeaders from '../components/About/TheLeaders'
import SecondSection from '../components/About/SecondSection'

const About = () => {
  return (
    <div className='relative md:py-0 md:px-[98px] md:pb-[200px] mx-auto max-w-[1400px] lg:pb-[160px] lg:px-[165px] flex flex-col gap-[76px] md:gap-[200px]
    
    md:before:content-["about_us"] md:before:absolute md:before:text-[18px] md:before:text-lightGrey md:before:leading-6 md:before:tracking-[18px] md:before:font-medium md:before:uppercase md:before:rotate-90 md:before:top-[1.5%] md:before:-left-[1%] lg:before:-left-[1.9%] lg:before:top-[5.4%]
    '>
      <FirstSection 
        heading='About' 
        subHeading='Your team of professionals' content='Our small team of world-class professionals will work with you every step of the way. Strong relationships are at the core of everything we do. This extends to the relationship our projects have with their surroundings.'/>
      <SecondSection 
        subHeading='Our Heritage'
        isAbout={true}
        />
      <TheLeaders />
    </div>
  )
}

export default About