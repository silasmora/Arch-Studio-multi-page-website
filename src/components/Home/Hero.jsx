import React, { useEffect } from 'react'
import { SeePortfolioButton } from '../SeePortfolioButton'
import { useNavigate } from 'react-router-dom'

const Hero = ({imageList, currentImageIndex, setCurrentImageIndex}) => {

  const windowWidth = window.innerWidth
  const isMobile = windowWidth <= 768
  const isTablet = windowWidth >= 768 && windowWidth <= 1024

  useEffect(() => {
    let intervalId
    intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageList.length)
    }, 3000)

    // Clean up the interval when the component is unmounted
    return () => {
      clearInterval(intervalId)
    }
  }, [])

  const navigate = useNavigate()

  return (
    <div className='relative px-8 pt-[116px] pb-[110px] md:px-[58px] md:pt-[186px] md:pb-[179px] lg:px-[190px] duration-300 overflow-x-hidden'>      
      {imageList.map((image, index) => (
        <img
          key={index}
          className={` absolute inset-0 h-full w-full object-cover object-center transform transition-transform duration-300 ${
            currentImageIndex === index ? 'translate-x-0' : 'translate-x-full'
          }`}
          src={isMobile ? image.imgMobile
            : isTablet ? image.imgTablet
            : image.imgDesktop
          }
          alt={`Hero-background-${index}`}
        />
      ))}
      
      <div className='absolute inset-0 bg-black bg-opacity-40'></div>
      <div className='relative text-white text-[48px] flex flex-col gap-3 md:gap-[10px]'>
        <h1 className='font-bold leading-[48px] -tracking-[1.2px] md:text-8xl md:leading-[80px] md:-tracking-[2px]'>Project Paramour</h1>
        <p className='text-[18px] leading-6 md:w-[95%] lg:w-[65%]'>Project made for an art museum near Southwest London. Project Paramour is 
        a statement of bold, modern architecture.</p>
      </div>
      <div className='relative pt-[83px] md:pt-10'>
        <SeePortfolioButton
          onClick={() => navigate('/portfolio')} 
          text='See Our Portfolio'/>
      </div>
    </div>
  )
}

export default Hero