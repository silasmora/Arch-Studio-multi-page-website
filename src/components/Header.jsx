import React, { useEffect, useState } from 'react'
import { NavigationMenu } from './NavigationMenu'
import { useNavigate } from 'react-router-dom'

const Header = () => {

  const navigate = useNavigate()
  const [isModal, setIsModal] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  console.log(isModal)

  useEffect(() => {
    if (isModal) {
      setModalOpen(true) 
    } else {
      setModalOpen(false)
    }
  }, [isModal])

  return (
    <>
      <div className='relative flex items-center justify-between p-8 mx-auto max-w-[1400px] md:justify-normal md:gap-[80px] md:py-14 md:px-[98px] lg:px-[165px] lg:gap-[95px]
    
      md:before:content-[""] md:before:absolute md:before:border md:before:border-lightGrey md:before:h-[104px] md:before:top-0 md:before:-left-8 lg:before:left-0 md:before:ml-[86px]'>
        <svg onClick={() => navigate('/')} xmlns="http://www.w3.org/2000/svg" width="97" height="40"><path fill="#1B1D23" d="M10.822 39.27l2.26-6.256h13.836l2.26 6.255H40L24.658 1.6h-9.316L0 39.268h10.822zM23.493 24.2h-6.986L20 15.252l3.493 8.95zm21.804 15.07V27.807c0-.776.22-1.499.662-2.169a5.14 5.14 0 011.746-1.632A4.51 4.51 0 0150 23.379c.64 0 1.343.13 2.112.388.769.259 1.434.601 1.998 1.028l3.972-7.991c-.654-.487-1.484-.883-2.488-1.188-1.005-.304-1.956-.456-2.854-.456-1.385 0-2.729.354-4.03 1.061-1.301.708-2.44 1.694-3.413 2.957V15.89h-9.498v23.38h9.498zm18.995.73c1.507 0 2.942-.21 4.304-.628 1.362-.418 2.439-.91 3.23-1.472l-3.105-6.393c-.289.198-.688.377-1.198.536-.51.16-1.07.24-1.678.24-.99 0-1.85-.217-2.58-.65a4.449 4.449 0 01-1.678-1.724 4.806 4.806 0 01-.582-2.33c0-.669.163-1.369.49-2.1.328-.73.845-1.347 1.553-1.849s1.625-.753 2.751-.753c1.187 0 2.161.258 2.922.776l3.105-6.393c-.76-.578-1.841-1.073-3.242-1.484a15.324 15.324 0 00-4.337-.616c-1.903 0-3.665.346-5.286 1.039-1.62.692-3.029 1.628-4.224 2.808a13.053 13.053 0 00-2.785 3.995 11.177 11.177 0 00-.993 4.6c0 1.69.354 3.285 1.062 4.784.707 1.5 1.678 2.82 2.91 3.961a13.79 13.79 0 004.258 2.683c1.606.647 3.307.97 5.103.97zm14.703-.73V26.392c0-.792.16-1.477.48-2.055a3.374 3.374 0 011.347-1.347c.578-.32 1.248-.48 2.01-.48 1.156 0 2.084.354 2.784 1.062.7.708 1.05 1.648 1.05 2.82v12.876h9.498V24.338c0-1.75-.41-3.314-1.232-4.692a9.088 9.088 0 00-3.345-3.276c-1.408-.807-3.003-1.21-4.783-1.21-1.4 0-2.782.255-4.144.765a12.064 12.064 0 00-3.665 2.157V0h-9.497v39.27h9.497z"/></svg>
        <div className='hidden md:block'>
          <NavigationMenu />
        </div>
        <svg
          onClick={() => setIsModal((prevState) => !prevState)}
          className='md:hidden' xmlns="http://www.w3.org/2000/svg" width="24" height="17"><g fill="#1B1D23" fill-rule="evenodd"><path d="M0 0h24v3H0zM0 7h24v3H0zM0 14h24v3H0z"/></g></svg>
      </div>
      <div className={`${isModal && 'absolute inset-0 bg-transparent/50 z-10'}`}>
        {isModal && (
          <div className={`absolute top-0 right-0 pl-12 pr-8 pt-10 pb-[42px] flex justify-between items-center bg-veryLightGrey w-[90%] z-10 transform ${modalOpen ? 'translate-x-0' : '-right-full translate-x-full'} ease-in-out duration-500`}>
            <NavigationMenu 
              isModal={isModal}
              setIsModal={setIsModal}
              />
            <svg
              onClick={() => setIsModal((prevState) => !prevState)}
              className='self-start' xmlns="http://www.w3.org/2000/svg" width="20" height="21"><path fill="#1B1D23" fill-rule="evenodd" d="M17.425.954l2.12 2.121-7.424 7.425 7.425 7.425-2.121 2.12L10 12.622l-7.425 7.425-2.12-2.121L7.878 10.5.454 3.075 2.575.955 10 8.378 17.425.954z"/></svg>
          </div>
        )}
      </div>
    </>
  )
}

export default Header