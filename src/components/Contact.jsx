import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full md:h-screen  text-gray-300 bg-[#0a192f]  justify-center items-center'>
            <hr className="max-w-[1200px] mx-auto   flex  border-gray-100 dark:bg-gray-700 pb-9"></hr>

      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center items-center w-full h-full">
        <form method='POST' action="https://formspree.io/f/xoqblope" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'></p>
            </div>
            
             {/* <span className='text-2xl text-white'>Name:   </span> */}
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' required />
            <input className='mt-4 bg-[#ccd6f6] p-2' type="text" placeholder='Mobile No.' name='mobile' required />
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' required />
            <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'minLength={5}></textarea>
            <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'type='submit'>Send</button>
        </form>
      </div>
    </div>
  )
}

export default Contact;