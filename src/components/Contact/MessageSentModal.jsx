import React, { useEffect } from 'react'

const MessageSentModal = ({FormData, setFormData}) => {

  const closeModal = () => {
    setFormData({
      name: '',
      email: '',
      message: '',
      isMessageSent: false
    })
  }

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (e.target.classList.contains('modal-background')) {
        closeModal()
      } 
    }
    document.addEventListener('click', handleClickOutside)

    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [FormData, setFormData])

  return (
    <div className='fixed inset-0 bg-transparent/50 z-50 flex justify-center items-center modal-background'>
      <div className='text-white text-[18px]  bg-veryDarkBlue py-6 px-8'>
        <p className='leading-6'>Message has been sent successfully!</p>
      </div>
    </div>
  )
}

export default MessageSentModal