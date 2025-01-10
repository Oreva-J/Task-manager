import React from 'react'
import { FaCheckDouble, FaRegEdit } from 'react-icons/fa'
import { RiDeleteBin6Line } from 'react-icons/ri'

const Task = () => {
  return (
    <div className='inline-flex justify-between items-center px-5 bg-slate-200 w-full h-10'>
        <div>
            <p>1.</p>
        </div>
        <div className='flex space-x-5  '>
            <FaCheckDouble className="text-green-500 hover:scale-125 " />
            <FaRegEdit className="text-purple-700 hover:scale-125 "  />
            <RiDeleteBin6Line className="text-red-500 hover:scale-125" />
        </div>
    </div>
  )
}

export default Task