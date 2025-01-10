import React from 'react'

const TaskForm = ({setFormInput, handleSubmit, formInput}) => {
  return (
    <form onSubmit={handleSubmit} 
    className='py-5 w-full inline-flex '>
        <input onChange={(e)=>setFormInput(e.target.value)} value={formInput} name='task' type="text" placeholder='Add a Task'  
        className='w-full h-9 outline outline-1 outline-blue-300 focus:outline-blue-800  ' />
        
        <button type='submit' 
        className='bg-purple-700 text-white h-9 w-20 '>Add</button>
    </form>
  )
}

export default TaskForm