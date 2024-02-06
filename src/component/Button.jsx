import React from 'react'

const Button = ({From, To, handleSubmit} ) => {
  return (
    <div onClick={handleSubmit} className='bg-pink-600 cursor-pointer text-white font-[400] p-1 m-2 text-2xl text-center rounded-md'>Convert {From} to {To}</div>
  )
}

export default Button