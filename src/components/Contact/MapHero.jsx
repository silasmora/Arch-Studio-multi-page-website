import React from 'react'
import { mapMobile, mapTablet, mapDesktop } from '../../../starter-code/assets/imageIndex'

const MapHero = () => {

  const isMobile = window.innerWidth <= 768
  const isTablet = window.innerWidth >= 768 && window.innerWidth <= 1024

  const heroMap = isMobile ? mapMobile : isTablet ? mapTablet : mapDesktop

  return (
    <div>
      <img className='h-full w-full' src={heroMap} alt="map" />
    </div>
  )
}

export default MapHero