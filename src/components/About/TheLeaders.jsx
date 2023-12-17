import React, { useState } from 'react'
import { avatarJakeDesktop, avatarThompsonDesktop, avatarJacksonDesktop, avatarMariaDesktop } from '../../../starter-code/assets/imageIndex'

const TheLeaders = () => {

  const leadersList = [
    {
      img: avatarJakeDesktop, 
      name: 'Jake Richards',
      position: 'Chief Architect'
    },
    {
      img: avatarThompsonDesktop,
      name: 'Thompson Smith',
      position: 'Head of Finance'
    },
    {
      img: avatarJacksonDesktop,
      name: 'Jackson Rourke',
      position: 'Lead Designer'
    },
    {
      img: avatarMariaDesktop,
      name: 'Maria Simpson',
      position: 'Senior Architect'
    }
  ]

  const [isHover, setIsHover] = useState(Array(leadersList.length).fill(false))
  console.log(isHover)

  const handleMouseEnter = (idx) => {
    const updatedHoverState = [...isHover]
    updatedHoverState[idx] = true
    setIsHover(updatedHoverState)
  }
  const handleMouseLeave = (idx) => {
    const updatedHoverState = [...isHover]
    updatedHoverState[idx] = false
    setIsHover(updatedHoverState)
  }

  return (
    <div className='px-8 pt-8 md:px-0 flex flex-col gap-[55px] pb-[171px] md:pb-0 md:gap-[49px] lg:gap-[115px] lg:flex-row'>
      <h1 className='text-5xl text-veryDarkBlue font-bold leading-[52px] -tracking-[1.2px] w-1/2 md:text-[72px] md:leading-[64px] md:-tracking-[2px] lg:w-1/4'>The Leaders</h1>
      <div className='grid md:grid-cols-2 gap-[79px] md:gap-x-[11px] md:gap-y-[103px] lg:gap-x-[30px] lg:gap-y-[63px]'>
        {leadersList.map((leader, idx) => (
          <div key={idx} className='flex flex-col gap-[15px]'>
            <div 
              onMouseEnter={() => handleMouseEnter(idx)}
              onMouseLeave={() => handleMouseLeave(idx)}
              className={`relative cursor-pointer`}
>
              <img className='w-full object-cover object-center' src={leader.img} alt="leader-pic" />
              <div className={`absolute inset-0 w-full  ${isHover[idx] ? 'bg-black/50' : 'bg-black/10'}`}></div>
              {isHover[idx] && (
                <div className='absolute top-[42%] right-[35%] flex items-center gap-8'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40"><path fill="#fff" d="M36 0H4C1.8 0 0 1.8 0 4v32c0 2.2 1.8 4 4 4h32c2.2 0 4-1.8 4-4V4c0-2.2-1.8-4-4-4zM12 34H6V16h6v18zM9 12.6C7 12.6 5.4 11 5.4 9S7 5.4 9 5.4 12.6 7 12.6 9 11 12.6 9 12.6zM34 34h-6V23.4c0-1.6-1.4-3-3-3s-3 1.4-3 3V34h-6V16h6v2.4c1-1.6 3.2-2.8 5-2.8 3.8 0 7 3.2 7 7V34z"/></svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="33"><path fill="#fff" d="M40 4.262a16.384 16.384 0 01-4.713 1.291 8.22 8.22 0 003.608-4.54 16.44 16.44 0 01-5.212 1.992 8.193 8.193 0 00-5.99-2.592c-5.298 0-9.191 4.944-7.995 10.075C12.88 10.147 6.833 6.88 2.785 1.915.635 5.603 1.67 10.428 5.323 12.872a8.172 8.172 0 01-3.715-1.027c-.09 3.802 2.635 7.358 6.582 8.15a8.225 8.225 0 01-3.707.14 8.213 8.213 0 007.667 5.698A16.5 16.5 0 010 29.233a23.232 23.232 0 0012.58 3.687c15.237 0 23.845-12.868 23.325-24.41A16.708 16.708 0 0040 4.262z"/></svg>
                </div>
              )}
            </div>

            <div className='text-veryDarkBlue'>
              <h1 className=' text-[32px] font-bold leading-10'>{leader.name}</h1>
              <p className='opacity-75 text-[18px] leading-6'>{leader.position}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TheLeaders