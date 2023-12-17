import React, { useState } from 'react'
import MessageSentModal from './MessageSentModal'

const ConnectWithUsForm = () => {

  const [formData, setFormData] = useState(
    {
      name: '',
      email: '',
      message: '',
      isMessageSent: false
    }
  )
  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const {name, value} = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    //Perform form validation
    const errors = validateForm(formData)
    setErrors(errors)
    
    //Check if there are any errors
    if (Object.keys(errors).length === 0) {
      setFormData({
        ...formData,
        isMessageSent: true
      })
      console.log(formData)
    }
  }

  const validateForm = (data) => {
    const errors = {}

    if (!data.name || !data.email || !data.message) {
      errors.name = "Can't be empty"
      errors.email = "Can't be empty"
      errors.message = "Can't be empty"
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (data.email && !emailPattern.test(data.email)) {
      errors.email = 'Please enter a valid email address'
    }
    return errors
  }

  return (
    <>
      <form onSubmit={handleSubmit} className='px-8 flex flex-col gap-10 pb-[132px] md:px-0 md:pb-0 lg:flex-row lg:justify-between lg:gap-[110px]'>
      <h1 className='text-5xl text-veryDarkBlue font-bold leading-[52px] -tracking-[1.2px] w-1/2 md:text-[72px] md:leading-[64px] md:-tracking-[2px] md:w-full lg:w-1/4'>Connect with us</h1>
      <div className='flex flex-col lg:w-full'>
        <div className='relative border-b border-veryDarkBlue'>
          <input 
          className='text-veryDarkBlue text-[20px] font-bold -tracking-[0.312px] py-5 px-[34px] cursor-pointer focus:outline-none' 
          type="text"
          name='name'
          value={formData.name}
          onChange={handleChange} 
          placeholder='Name'
          />
          {errors.name && <p className='absolute top-[50%] right-0 text-red text-[18px] font-bold -tracking-[0.281px] pr-4'>{errors.name}</p>}
        </div>
        <div className='relative border-b border-veryDarkBlue'>
          <input 
          className='text-veryDarkBlue text-[20px] font-bold -tracking-[0.312px] py-5 px-[34px] cursor-pointer focus:outline-none' 
          value={formData.email} 
          onChange={handleChange}
          type="text" 
          name='email'
          placeholder='Email'
          />
          {errors.email && <p className='absolute top-[50%] right-0 text-red text-[18px] font-bold -tracking-[0.281px] pr-4'>{errors.email}</p>}
        </div>
        <div className='relative border-b border-veryDarkBlue'>
          <textarea 
          className='text-veryDarkBlue text-[20px] font-bold -tracking-[0.312px] pt-10 pb-[70px] px-[34px] cursor-pointer focus:outline-none' 
          placeholder='Message' 
          name='message'
          value={formData.message}
          onChange={handleChange}
          >
          </textarea>
          {errors.message && <p className='absolute top-[50%] right-0 text-red text-[18px] font-bold -tracking-[0.281px] pr-4'>{errors.message}</p>}
        </div>
        <button 
          type='submit'
          onClick={handleSubmit}
          className='bg-veryDarkBlue py-6 px-8 self-end'>
          <svg xmlns="http://www.w3.org/2000/svg" width="26" height="20"><g fill="none" fill-rule="evenodd" stroke="#fff" stroke-width="2"><path d="M15 1l9 9-9 9M0 10h24"/></g></svg>
        </button>
      </div>
      </form>
      {formData.isMessageSent && (
        <MessageSentModal 
          formData={formData}
          setFormData={setFormData}
        />
      )}
    </>
  )
}

export default ConnectWithUsForm