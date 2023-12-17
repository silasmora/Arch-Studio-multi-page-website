import React from 'react'
import { smallTeamMobile, smallTeamTablet, smallteamDesktop } from '../../../starter-code/assets/imageIndex'
import { SeePortfolioButton } from '../SeePortfolioButton'
import { useNavigate } from 'react-router-dom'

const SmallTeamSection = () => {

  const navigate = useNavigate()

  return (
    <div className='relative px-8 py-[180px] md:px-[58px] md:py-[167px] lg:px-[190px]'>
      <img className='absolute inset-0 h-full w-full object-cover object-center md:hidden' src={smallTeamMobile} alt="small-team" />
      <img className='hidden absolute inset-0 h-full w-full object-cover object-center md:block lg:hidden' src={smallTeamTablet} alt="small-team" />
      <img className='hidden absolute inset-0 h-full w-full object-cover object-center lg:block' src={smallteamDesktop} alt="small-team" />
      <div className='absolute inset-0 bg-black opacity-60'></div>
      <div className='relative flex flex-col gap-[23px] lg:gap-[27px]'>
        <h1 className='text-white text-[48px] font-bold leading-[52px] -tracking-[1.7px] w-4/5 md:text-[72px] md:leading-[64px] md:-tracking-[2px] lg:w-2/3'>Small team, big ideas</h1>
        <div>
          <SeePortfolioButton 
            onClick={() => navigate('/about')} 
            text='About Us'/>
        </div>
      </div>
    </div>
  )
}

export default SmallTeamSection