import React from 'react'
import { tower228BMobile, delSolMobile, prototypeMobile, tower228BTablet, delSolTablet, prototypeTablet, tower228BDesktop, delSolDesktop, prototypeDesktop } from '../../../starter-code/assets/imageIndex'
import { NavLink, useNavigate } from 'react-router-dom'
import { SeePortfolioButton } from '../SeePortfolioButton'

const FeaturedSection = () => {

  const featuredCategories = [
    {
      id: 1,
      imgMobile: delSolMobile,
      imgTablet: delSolTablet,
      imgDesktop: delSolDesktop,
      headingText: 'Project Del Sol',
    },
    {
      id: 2,
      imgMobile: tower228BMobile,
      imgTablet: tower228BTablet,
      imgDesktop: tower228BDesktop,
      headingText: '228B Tower',
    },
    {
      id: 3,
      imgMobile: prototypeMobile,
      imgTablet: prototypeTablet,
      imgDesktop: prototypeDesktop,
      headingText: 'Le Prototype',
    }
  ]
  const windowwidth = window.innerWidth
  const isMobile = windowwidth <= 768
  const isTablet = windowwidth >= 768 && windowwidth <= 1024

  const navigate = useNavigate()

  return (
    <div className='flex flex-col gap-[42px] px-8 pt-[73px] pb-[132px] md:px-0 md:pt-[207px] md:pb-[200px] md:gap-[86px] lg:gap-[65px]'>
      <div className='flex justify-between items-center'>
        <h1 className='text-veryDarkBlue text-[48px] font-bold leading-[52px] -tracking-[1.7px] md:text-[72px] md:leading-[64px] md:-tracking-[2px] '>Featured</h1>
        <div className='hidden md:block'>
          <SeePortfolioButton 
            onClick={() => navigate('/portfolio')} 
            text='See All'/>
        </div>
      </div>
      <div className='flex flex-col gap-6 lg:flex-row lg:gap-[30px]'>
      {featuredCategories.map((category, idx) => (
        <div key={idx} className='relative h-[240px] flex justify-start items-center lg:h-[560px] lg:w-1/3'>
          <img className='absolute inset-0 h-full w-full object-cover object-center saturate-150' 
          src={isMobile ? category.imgMobile
           : isTablet ? category.imgTablet 
           : category.imgDesktop} />
          <div className='absolute inset-0 bg-gradient-to-t from-black/70 to-transparent '></div>
          <div className='hidden md:block absolute right-5 translate-y-6 text-white opacity-50 text-[250px] font-bold leading-[200px] -tracking-[5px] lg:-right-3 lg:top-5'>{category.id}</div>
          <div className='relative text-white self-end p-6 md:p-10'>
            <h1 className='text-[32px] font-bold leading-10'>{category.headingText}</h1>
            <NavLink className='text-[18px] font-medium leading-6 opacity-75'>View All Projects</NavLink>
          </div>
        </div>
      ))}
      </div>
      <div className='-mt-[18px] md:hidden'>
        <SeePortfolioButton
          onClick={() => navigate('/portfolio')} 
          text='See All' 
          isFeatured={true}/>
      </div>
    </div>
  )
}

export default FeaturedSection