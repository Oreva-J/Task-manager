import React, { useState } from 'react'
import TaskForm from './TaskForm'
import Task from './Task'

const TaskList = () => {
    const [formInput, setFormInput] = useState("")

  return (
    
    <div className='p-10 space-y-5'>
            <h2 className='text-2xl font-semibold'>Task Manager</h2>
            <TaskForm formInput={formInput} setFormInput={setFormInput} />

            <div className='text-xl font-semibold text-stone-800 flex justify-between'>
                <p>Total Task: </p>
                <p>Completed Task: </p>
            </div><hr />

           <Task />
           <Task />
        
    </div>
  )
}

export default TaskList