import React, { useState } from 'react'
import TaskForm from './TaskForm'
import Task from './Task'

const TaskList = () => {
    const [formInput, setFormInput] = useState({ completed: false, name:"" })

    const {name} = formInput

    const handleChange = (e)=>{
      const {name, value} = e.target
      setFormInput({...formInput, [name]:value})
    }

    const handleSubmit = async (e) => {
      e.preventDefault()
      console.log(formInput);
      
      
    }

  return (
    
    <div className='p-10 space-y-5'>
            <h2 className='text-2xl font-semibold'>Task Manager</h2>
            <TaskForm name={name} handleChange={handleChange} handleSubmit={handleSubmit} />

            <div className='text-xl font-semibold text-stone-800 flex justify-between'>
                <p>Total Task: </p>
                <p>Completed Task: </p>
            </div><hr />

           <Task />
           <Task />
           <Task />
    </div>
  )
}

export default TaskList