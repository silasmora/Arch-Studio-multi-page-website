import React from 'react'

export const SeePortfolioButton = ({text, isFeatured}) => {
  return (
    <button className={`text-white text-[18px] font-bold bg-veryDarkBlue py-6 px-8 flex items-center gap-6 ${isFeatured && 'w-full justify-center'} hover:bg-darkGray transition ease-in-out duration-300`}>
      {text}
      <span>
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="20"><g fill="none" fill-rule="evenodd" stroke="#fff" stroke-width="2"><path d="M15 1l9 9-9 9M0 10h24"/></g></svg>
      </span>
    </button>
  )
}
