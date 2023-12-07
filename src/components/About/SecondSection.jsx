import React from 'react'
import { heritageDesktop } from '../../../starter-code/assets/imageIndex'

const SecondSection = ({subHeading, isAbout, isContact}) => {

  const contactDetails = [
    {
     location: 'Main Office',
     address: {
      mail: 'Mail : archone@mail.com',
      address: 'Address : 1892 Chenoweth Drive TN',
      phone: 'Phone : 123-456-3451'
     },
     mapLink: ''
    },
    {
     location: 'Office II',
     address: {
      mail: 'Mail : archtwo@mail.com',
      address: 'Address : 3399 Wines Lane TX',
      phone: 'Phone : 832-123-4321'
     },
     mapLink: ''
    }

  ]
  return (
    <div className={`px-8 pt-[20px] flex flex-col gap-[40px] md:px-0 md:pt-0 lg:flex-row ${isContact ? 'lg:gap-0' : 'lg:gap-[124px] '}`}>
        <div className='relative flex flex-col gap-[22px] md:gap-[62px] pt-[69px] md:pt-[50px] lg:pt-[83px] lg:gap-[51px]'>
          <div className='absolute top-0 border-t border-lightGrey w-[65px]'></div>
          <h1 className='text-5xl text-veryDarkBlue font-bold leading-[52px] -tracking-[1.2px] w-1/2 md:text-[72px] md:leading-[64px] md:-tracking-[2px]'>{subHeading}</h1>
          {isAbout && (
            <div className='flex flex-col gap-[22px] text-[18px] text-darkGray font-medium'>
              <p className='leading-6'>Founded in 2007, we started as a trio of architects. Our complimentary skills and relentless attention to detail turned Arch into one of the most sought after boutique firms in the country.</p>
              <p className='leading-6'>Speciliazing in Urban Design allowed us to focus on creating exceptional structures that live in harmony with their surroundings. We consider every detail from every surrounding element to inform our designs. </p>
              <p className='leading-6'>Our small team of world-class professionals provides input on every project.</p>
            </div>
          )}
        </div>
        {isAbout && (
          <img className='hidden lg:block' src={heritageDesktop} alt="heritage-image" />
        )}
        {isContact && (
          <div className='flex flex-col gap-10 lg:pt-[83px] lg:flex-row'>
          {contactDetails.map((location, idx) => (
            <div key={idx} className='flex flex-col gap-[43px] text-[18px] md:flex-row md:justify-between lg:flex-col'>
              <div className='flex flex-col gap-[14px]'>
                <h3 className='text-darkGray font-bold leading-9'>{location.location}</h3>
                <div className='text-darkGray font-medium leading-6'>
                  <p>{location.address.mail}</p>
                  <p>{location.address.address}</p>
                  <p>{location.address.phone}</p>
                </div>
              </div>
              <div className='flex items-center gap-6 ml-2 md:self-end md:mb-2 lg:self-start'>
                <p className='text-veryDarkBlue font-bold leading-6 cursor-pointer hover:underline '>View on Map</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="20"><g fill="none" fill-rule="evenodd" stroke="#1B1D23" stroke-width="2"><path d="M15 1l9 9-9 9M0 10h24"/></g></svg>
              </div>
            </div>
          ))}
        </div>
        )}
    </div>
  )
}

export default SecondSection