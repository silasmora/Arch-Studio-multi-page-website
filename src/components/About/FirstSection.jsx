import React from 'react'
import { imageHeroMobile, imageHeroTablet, imageHeroDesktop, contactHeroMobile, contactHeroTablet, contactHeroDesktop } from '../../../starter-code/assets/imageIndex'

const FirstSection = ({isContact, heading, subHeading, content}) => {

  const isMobile = window.innerWidth <= 768
  const isTablet = window.innerWidth >= 768 && window.innerWidth <= 1024

  const aboutHeroImage = isMobile ? imageHeroMobile : isTablet ? imageHeroTablet : imageHeroDesktop

  const contactHeroImage = isMobile ? contactHeroMobile : isTablet ? contactHeroTablet : contactHeroDesktop

  return (
    <div className='flex flex-col md:gap-[200px]'>
      <div className='relative h-[240px] flex flex-col justify-end md:h-[720px] md:flex-col-reverse md:justify-start md:items-end'>
        <img className='absolute inset-0 object-cover object-center h-full w-full lg:w-[635px]' 
          src={isContact ? contactHeroImage : aboutHeroImage} alt="image-hero" />
        <div className='absolute inset-0 bg-black bg-opacity-40 lg:w-[635px]'></div>
        <div className='relative bg-white h-[45px] w-[90%] md:h-[431px] md:flex md:flex-col md:justify-end md:pl-[59px] lg:w-[580px] lg:h-[503px] lg:pl-[140px]'>
          <div className={`hidden md:block absolute -top-[20%] right-0 text-[10rem] text-veryLightGrey font-bold leading-[200px] -tracking-[3px] lg:left-0 lg:text-[225px] lg:-top-[18%] ${isContact && 'lg:-ml-[170px]'}`}>{heading}</div>
          <div className='hidden flex-col gap-[38px] md:flex md:gap-[49px]'>
            <div className='absolute top-[21%] border-t border-lightGrey w-[65px]'></div>
            <h1 className='text-5xl text-veryDarkBlue font-bold leading-[52px] -tracking-[1.2px] md:text-[72px] md:leading-[64px] md:-tracking-[2px]'>{subHeading}</h1>
            <p className='text-[18px] text-darkGray font-medium leading-6'>{content}</p>
          </div>
        </div>
      </div>
      <div className='flex flex-col gap-[21px] pt-5 px-8 md:hidden'>
          <h1 className='text-5xl text-veryDarkBlue font-bold leading-[52px] -tracking-[1.2px]'>{subHeading}</h1>
          <p className='text-[18px] text-darkGray font-medium leading-6'>{content}</p>
      </div>
    </div>
  )
}

export default FirstSection