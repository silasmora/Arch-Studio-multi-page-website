import React, { useState } from 'react'
import Hero from '../components/Home/Hero'
import { paramourMobile, paramourTablet, paramourDesktop, seraphMobile, seraphTablet, seraphDesktop, federalMobile, federalTablet, federalDesktop, trinityMobile, trinityTablet, trinityDesktop } from '../../starter-code/assets/imageIndex'
import NumberedImageList from '../components/Home/NumberedImageList'
import { WelcomeSection } from '../components/Home/WelcomeSection'
import SmallTeamSection from '../components/Home/SmallTeamSection'
import FeaturedSection from '../components/Home/FeaturedSection'

export const Home = () => {

  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  
  const imageList = [
    {
      number: '01',
      imgMobile: paramourMobile,
      imgTablet: paramourTablet,
      imgDesktop: paramourDesktop,
    },
    {
      number: '02',
      imgMobile: seraphMobile,
      imgTablet: seraphTablet,
      imgDesktop: seraphDesktop,
    },
    {
      number: '03',
      imgMobile: federalMobile,
      imgTablet: federalTablet,
      imgDesktop: federalDesktop,
    },
    {
      number: '04',
      imgMobile: trinityMobile,
      imgTablet: trinityTablet,
      imgDesktop: trinityDesktop,
    }
  ]

  return (
    <div className='relative md:px-[98px] lg:px-[165px] mx-auto max-w-[1400px]
    
    md:before:content-["home"] md:before:absolute md:before:text-[18px] md:before:text-lightGrey md:before:leading-6 md:before:tracking-[18px] md:before:font-medium md:before:uppercase md:before:rotate-90 md:before:top-[1.5%] md:before:-left-[1%] lg:before:left-[1.7%]'>
      <div className='flex flex-col relative'>
        <Hero 
          imageList={imageList}
          currentImageIndex={currentImageIndex}
          setCurrentImageIndex={setCurrentImageIndex}
        />
        <div className='hidden lg:flex absolute bottom-0 left-0 -translate-x-[24.1%]'>
          <NumberedImageList 
            imageList={imageList}
            currentImageIndex={currentImageIndex}
            setCurrentImageIndex={setCurrentImageIndex}
          />
        </div>
      </div>
      <WelcomeSection />
      <SmallTeamSection />
      <FeaturedSection />
    </div>
  )
}
