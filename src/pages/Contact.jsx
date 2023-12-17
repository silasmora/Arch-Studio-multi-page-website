import React from 'react'
import FirstSection from '../components/About/FirstSection'
import SecondSection from '../components/About/SecondSection'
import Map from '../components/Contact/MapHero'
import ConnectWithUsForm from '../components/Contact/ConnectWithUsForm'


const Contact = () => {
  return (
    <div className='relative md:py-0 md:px-[98px] md:pb-[200px] mx-auto max-w-[1400px] lg:pb-[160px] lg:px-[165px] flex flex-col gap-[76px] md:gap-[200px]
    
    md:before:content-["contact"] md:before:absolute md:before:text-[18px] md:before:text-lightGrey md:before:leading-6 md:before:tracking-[18px] md:before:font-medium md:before:uppercase md:before:rotate-90 md:before:top-[3.9%] md:before:-left-[6.5%] lg:before:-left-[1.3%] lg:before:top-[3.5%]
    '>
      <FirstSection
        isContact={true} 
        heading='Contact'
        subHeading='Tell us about your project'
        content='We’d love to hear more about your project. Please, leave a message below or give us a call. We have two offices, one in Texas and one in Tennessee. If you find yourself nearby, come say hello!'
        />
      <SecondSection
        isContact ={true}
        subHeading='Contact 
      Details'/>
      <Map />
      <ConnectWithUsForm />
    </div>
  )
}

export default Contact