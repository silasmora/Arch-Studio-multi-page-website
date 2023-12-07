import React from 'react'

const NumberedImageList = ({ imageList, currentImageIndex, setCurrentImageIndex }) => {

  const handleImageClick = (idx) => {
    setCurrentImageIndex(idx)
  }

  return (
    <ul className='flex'>
      {imageList.map((image, idx) => (
        <div onClick={() => handleImageClick(idx)} key={idx} className={`${currentImageIndex === idx ? 'bg-veryDarkBlue' : 'bg-white'} cursor-pointer duration-300 transition ease-in-out hover:bg-veryLightGrey`}>
          <li key={idx} 
            className={`text-[18px] font-bold leading-[25px] py-[28px] px-8 ${currentImageIndex === idx ? 'text-white' : 'text-mediumGrey'}`} 
            >
          {image.number}
          </li>
        </div>
      ))}
    </ul>
  )
}

export default NumberedImageList