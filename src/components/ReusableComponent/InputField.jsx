import React from 'react'

const InputField = ({label, placeHolder, type, row}) => {
  return (
    <div className='w-full flex flex-col'>
        <label className='text-lg xsm:text-xl lg:text-2xl font-semibold text-darker_green font-jost'>{label} <span className='text-red-500'>*</span></label>
        { type === "text" ?
        <input className='border border-darker_green outline-none py-4 px-5 w-full text-darker_green font-lato text-lg rounded mt-5' placeholder={placeHolder}/>
        :
        <textarea className='border border-darker_green outline-none py-4 px-5 w-full text-darker_green font-lato text-lg rounded mt-5' placeholder={placeHolder} rows={row}/>
        }
        </div>
  )
}

export default InputField