import React from 'react'
import {useForm} from 'react-hook-form'

function AddTaskForm({addNewTasks,tasks}) {
    let {register,handleSubmit,reset,formState:{errors}}=useForm()

    const handleForm=(obj)=>{
        addNewTasks({...obj,isComplete:false,id:tasks.length+1})
        reset()
    }
  return (
    <div className='bg-white p-2 border border-gray-400'>
        <form onSubmit={handleSubmit(handleForm)}>
            <div className='flex flex-wrap gap-2 items-start'>
                <div>
                    <input placeholder='Enter the Title' type="text" {...register('title',{required:true,minLength:3})} id="" className='px-2 py-1 border border-black'/>
                    {errors.title?.type==='required'&&<p className='text-red-700 text-xs'>Title is Required</p>}
                    {errors.title?.type==='minLength'&&<p className='text-red-700 text-xs'>Minimum length should be 3</p>}
                </div>
                <div>
                    <select defaultValue="" {...register('priority',{required:true})} className='px-2 py-1 border border-black'>
                        <option value="" disabled>
                            Select the Priority
                        </option>
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                    </select>
                    {errors.priority?.type==='required'&&<p className='text-red-700 text-xs'>Priority is required</p>}
                </div>
            <button type="submit" className='px-2 py-1 bg-gray-400 border border-black'>Add Task</button>
            </div>
        </form>
    </div>
  )
}

export default AddTaskForm