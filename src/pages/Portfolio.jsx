import React, { useEffect, useState } from 'react'
import { portfolioSeraphMobile, portfolioSeraphTablet, portfolioSeraphDesktop,  eeboxMobile, eeboxTablet, eeboxDesktop, portfolioFederalMobile, portfolioFederalTablet, portfolioFederalDesktop, delSolMobile, delSolTablet, delSolDesktop, prototypeMobile, prototypeTablet, prototypeDesktop, tower228BMobile, tower228BTablet, tower228BDesktop, edelweissMobile, edelweissTablet, edelweissDesktop, netcryMobile, netcryTablet, netcryDesktop, hypersMobile, hypersTablet, hypersDesktop, sxivMobile, sxivTablet, sxivDesktop, trinityMobile, trinityTablet, trinityDesktop, portfolioParamourMobile, portfolioParamourTablet, portfolioParamourDesktop} from '../../starter-code/assets/imageIndex'

const Portfolio = () => {

  const portfolioIndex = [
    {
      imgMobile: portfolioSeraphMobile,
      imgTablet: portfolioSeraphTablet,
      imgDesktop: portfolioSeraphDesktop,
      headingText: 'Seraph Station',
      dateText: 'September 2019'
    },
    {
      imgMobile: eeboxMobile,
      imgTablet: eeboxTablet,
      imgDesktop: eeboxDesktop,
      headingText: 'Eebox Building',
      dateText: 'August 2017'
    },
    {
      imgMobile: portfolioFederalMobile,
      imgTablet: portfolioFederalTablet,
      imgDesktop: portfolioFederalDesktop,
      headingText: 'Federal II Tower',
      dateText: 'March 2017',
    },
    {
      imgMobile: delSolMobile,
      imgTablet: delSolTablet,
      imgDesktop: delSolDesktop,
      headingText: 'Project Del Sol',
      dateText: 'January 2016'
    },
    {
      imgMobile: prototypeMobile,
      imgTablet: prototypeTablet,
      imgDesktop: prototypeDesktop,
      headingText: 'Le Prototype',
      dateText: 'October 2015'
    },
    {
      imgMobile: tower228BMobile,
      imgTablet: tower228BTablet,
      imgDesktop: tower228BDesktop,
      headingText: '228B Tower',
      dateText: 'April 2015'
    },
    {
      imgMobile: edelweissMobile,
      imgTablet: edelweissTablet,
      imgDesktop: edelweissDesktop,
      headingText: 'Grand Edelweiss Hot',
      dateText: 'December 2013'
    },
    {
      imgMobile: netcryMobile,
      imgTablet: netcryTablet,
      imgDesktop: netcryDesktop,
      headingText: 'Netcry Tower',
      dateText: 'August 2012'
    },
    {
      imgMobile: hypersMobile,
      imgTablet: hypersTablet,
      imgDesktop: hypersDesktop,
      headingText: 'Hypers',
      dateText: 'January 2012'
    },
    {
      imgMobile: sxivMobile,
      imgTablet: sxivTablet,
      imgDesktop: sxivDesktop,
      headingText: 'SXIV Tower',
      dateText: 'March 2011'
    },
    {
      imgMobile: trinityMobile,
      imgTablet: trinityTablet,
      imgDesktop: trinityDesktop,
      headingText: 'Trinity Bank Tower',
      dateText: 'September 2010'
    },
    {
      imgMobile: portfolioParamourMobile,
      imgTablet: portfolioParamourTablet,
      imgDesktop: portfolioParamourDesktop,
      headingText: 'Project Paramour',
      dateText: 'February 2008'
    },

  ]

  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const isMobile = windowWidth <= 768
  const isTablet = windowWidth >= 768 && windowWidth <= 1024

  return (
    <div className='relative px-8 pt-[55px] pb-[132px]  md:py-0 md:px-[98px] md:pb-[200px] mx-auto max-w-[1400px] lg:pb-[160px] lg:px-[165px]
    
    md:before:content-["portfolio"] md:before:absolute md:before:text-[18px] md:before:text-lightGrey md:before:leading-6 md:before:tracking-[18px] md:before:font-medium md:before:uppercase md:before:rotate-90 md:before:top-[3.4%] md:before:-left-[9.5%] lg:before:top-[4.8%]  lg:before:-left-[3%]
    '>
      <div className='grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-[30px]w-full'>
      {portfolioIndex.map((project, idx) => (
        <div key={idx} className='relative h-[240px] flex justify-start items-center lg:h-[560px]'>
          <img className='absolute inset-0 h-full w-full object-cover object-center' src={
            isMobile ? project.imgMobile
            : isTablet ? project.imgTablet
            : project.imgDesktop
          } alt="project image" />
          <div className='absolute inset-0 bg-gradient-to-t from-black/70 to-transparent '></div>
          <div className='relative text-white self-end p-6 md:p-10'>
            <h1 className='text-[32px] font-bold leading-10'>{project.headingText}</h1>
            <p className='text-[18px] font-medium leading-6 opacity-75'>{project.dateText}</p>
          </div>
        </div>
      ))}
      </div>
    </div>
  )
}

export default Portfolio