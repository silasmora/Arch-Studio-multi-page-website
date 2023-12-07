import React from 'react'
import { NavigationMenu } from './NavigationMenu'
import { SeePortfolioButton } from './SeePortfolioButton'
import { useNavigate } from 'react-router-dom'

const Footer = () => {

  const navigate = useNavigate()

  return (
    <div className='mx-auto max-w-[1400px] lg:px-[165px]'>
      <div className='bg-veryLightGrey pt-[93px] pb-12 flex flex-col items-center gap-8 md:py-0 md:flex-row md:justify-between relative'>
        <div className='absolute -top-[17%] md:relative'>
          <svg className='lg:hidden' onClick={() => navigate('/')} xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120" fill="none">
      <rect width="120" height="120" fill="#1B1D23"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M39.8903 68.9116L38.5271 72.6847H32L41.2536 49.9639H46.8718L56.1254 72.6847H49.5983L48.235 68.9116H39.8903ZM44.0627 58.1984L41.9558 63.5963H46.1695L44.0627 58.1984Z" fill="white"/>
      <path d="M59.3199 72.6844V65.7717C59.3199 65.3036 59.4531 64.8675 59.7193 64.4636C59.9855 64.0597 60.3366 63.7315 60.7727 63.479C61.2088 63.2266 61.6701 63.1003 62.1566 63.1003C62.5422 63.1003 62.9668 63.1784 63.4303 63.3344C63.8939 63.4905 64.2956 63.697 64.6352 63.9541L67.0312 59.1345C66.6365 58.8408 66.1362 58.6021 65.5303 58.4185C64.9244 58.2349 64.3507 58.1431 63.809 58.1431C62.9736 58.1431 62.1635 58.3565 61.3786 58.7834C60.5937 59.2103 59.9075 59.8047 59.3199 60.5666V58.5837H53.5916V72.6844H59.3199Z" fill="white"/>
      <path d="M70.7769 73.125C71.6857 73.125 72.551 72.9988 73.3726 72.7463C74.1942 72.4939 74.8437 72.1978 75.3211 71.8582L73.4483 68.0025C73.2739 68.1219 73.0329 68.2297 72.7254 68.3261C72.4178 68.4225 72.0805 68.4707 71.7133 68.4707C71.1166 68.4707 70.5979 68.3399 70.1572 68.0783C69.7166 67.8166 69.3792 67.4701 69.1451 67.0386C68.911 66.6071 68.794 66.139 68.794 65.634C68.794 65.2301 68.8927 64.8078 69.09 64.3672C69.2874 63.9265 69.5995 63.5547 70.0264 63.2518C70.4533 62.9489 71.0064 62.7974 71.6857 62.7974C72.4018 62.7974 72.9893 62.9534 73.4483 63.2656L75.3211 59.4099C74.862 59.0611 74.2103 58.7627 73.3657 58.5149C72.5211 58.267 71.649 58.1431 70.7494 58.1431C69.6018 58.1431 68.5392 58.3519 67.5616 58.7696C66.5839 59.1873 65.7347 59.7519 65.0141 60.4633C64.2934 61.1748 63.7334 61.9781 63.3341 62.8731C62.9348 63.7682 62.7351 64.6931 62.7351 65.6478C62.7351 66.6668 62.9485 67.6284 63.3754 68.5327C63.8023 69.4369 64.3875 70.2333 65.1311 70.9218C65.8747 71.6103 66.7308 72.1496 67.6993 72.5398C68.6678 72.9299 69.6936 73.125 70.7769 73.125Z" fill="white"/>
      <path d="M79.6449 72.6847V64.9183C79.6449 64.441 79.7413 64.0279 79.9341 63.679C80.1269 63.3302 80.3977 63.0594 80.7465 62.8666C81.0954 62.6738 81.4993 62.5774 81.9583 62.5774C82.656 62.5774 83.216 62.7908 83.6383 63.2177C84.0605 63.6446 84.2717 64.2115 84.2717 64.9183V72.6847H90.0001V63.679C90.0001 62.6233 89.7522 61.68 89.2565 60.8492C88.7608 60.0184 88.0883 59.3598 87.2392 58.8732C86.39 58.3867 85.4284 58.1434 84.3543 58.1434C83.5097 58.1434 82.6766 58.2972 81.855 58.6047C81.0334 58.9122 80.2967 59.346 79.6449 59.906V49H73.9165V72.6847H79.6449Z" fill="white"/>
          </svg>
          <div onClick={() => navigate('/')} className='hidden lg:flex bg-veryDarkBlue h-[200px] w-[200px] justify-center items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" width="97" height="40" viewBox="0 0 97 40" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M13.0822 33.0137L10.8219 39.2694H0L15.3425 1.59814H24.6575L40 39.2694H29.1781L26.9178 33.0137H13.0822ZM20 15.2511L16.5068 24.2009H23.4931L20 15.2511Z" fill="white"/>
  <path d="M45.2968 39.2694V27.8082C45.2968 27.0319 45.5175 26.309 45.9589 25.6392C46.4003 24.9695 46.9825 24.4254 47.7055 24.0068C48.4284 23.5883 49.1933 23.379 50 23.379C50.6393 23.379 51.3432 23.5083 52.1119 23.7671C52.8805 24.0258 53.5464 24.3683 54.1096 24.7945L58.0822 16.8036C57.4277 16.3166 56.5982 15.9208 55.5936 15.6164C54.589 15.312 53.6377 15.1598 52.7397 15.1598C51.3546 15.1598 50.0114 15.5137 48.71 16.2214C47.4087 16.9292 46.2709 17.9147 45.2968 19.1781V15.8904H35.7991V39.2694H45.2968Z" fill="white"/>
  <path d="M64.2922 40C65.799 40 67.2336 39.7907 68.5958 39.3721C69.9581 38.9535 71.035 38.4627 71.8264 37.8995L68.7214 31.5068C68.4322 31.7047 68.0327 31.8835 67.5228 32.0434C67.0129 32.2032 66.4535 32.2831 65.8447 32.2831C64.8554 32.2831 63.9954 32.0662 63.2648 31.6324C62.5342 31.1986 61.9748 30.624 61.5867 29.9086C61.1986 29.1933 61.0045 28.417 61.0045 27.5799C61.0045 26.9102 61.1681 26.21 61.4954 25.4794C61.8226 24.7488 62.3401 24.1324 63.0479 23.6301C63.7557 23.1278 64.6727 22.8767 65.799 22.8767C66.9863 22.8767 67.9604 23.1354 68.7214 23.6529L71.8264 17.2602C71.0654 16.6819 69.9847 16.1872 68.5844 15.7762C67.1841 15.3653 65.7382 15.1598 64.2465 15.1598C62.3439 15.1598 60.5821 15.5061 58.9611 16.1986C57.3401 16.8911 55.9322 17.8272 54.7374 19.0068C53.5426 20.1864 52.6141 21.5182 51.952 23.0023C51.2899 24.4863 50.9589 26.0198 50.9589 27.6027C50.9589 29.2922 51.3127 30.8866 52.0205 32.3858C52.7283 33.8851 53.6986 35.2055 54.9315 36.347C56.1643 37.4886 57.5837 38.3828 59.1895 39.0297C60.7952 39.6765 62.4962 40 64.2922 40Z" fill="white"/>
  <path d="M78.9954 39.2694V26.3927C78.9954 25.6012 79.1552 24.9163 79.4748 24.3379C79.7945 23.7595 80.2435 23.3105 80.8219 22.9909C81.4003 22.6712 82.07 22.5114 82.831 22.5114C83.9878 22.5114 84.9162 22.8653 85.6164 23.5731C86.3166 24.2808 86.6666 25.2207 86.6666 26.3927V39.2694H96.1643V24.3379C96.1643 22.5875 95.7534 21.0236 94.9315 19.6461C94.1096 18.2686 92.9946 17.1766 91.5867 16.3699C90.1788 15.5632 88.5844 15.1598 86.8036 15.1598C85.4033 15.1598 84.022 15.4148 82.6598 15.9247C81.2975 16.4346 80.0761 17.1537 78.9954 18.0822V0H69.4977V39.2694H78.9954Z" fill="white"/>
            </svg>
          </div>
        </div>
        <div className='lg:pr-[150px]'>
          <NavigationMenu isFooter={true}/>
        </div>
        <div className='z-10'>
          <SeePortfolioButton text='See Our Portfolio'/>
        </div>
        <div className='hidden md:block absolute bg-white right-0 w-[156px] h-[120px] lg:h-[200px] lg:w-[130px]'></div>
      </div>
    </div>
  )
}

export default Footer