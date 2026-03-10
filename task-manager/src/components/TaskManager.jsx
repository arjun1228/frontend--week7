import React from 'react'
import AddTaskForm from './AddTaskForm'
import TaskList from './TaskList'
import { useState,useEffect } from 'react'
function sortTasks(tasks){
  let l=0
  let r=tasks.length-1
  let curr=0
  while(curr<=r){
    if(tasks[curr].priority==='high'){
        [tasks[curr], tasks[l]] = [tasks[l], tasks[curr]]
        l+=1
        curr+=1
    }
    else if(tasks[curr].priority==='low'){
        [tasks[curr], tasks[r]] = [tasks[r], tasks[curr]]
        r-=1
    }
    else{
      curr+=1
    }
    
  }
  return tasks
}
function TaskManager() {
    let [tasks,setTasks]=useState([])
    const addNewTasks=(obj)=>{
        let updatedTasks=sortTasks([...tasks,obj])
        setTasks(updatedTasks)
    }
    const changeTaskState=(index)=>{
        const updatedTasks=tasks.map((task)=>task.id==index?{ ...task, isComplete: !task.isComplete }:task)
        setTasks(updatedTasks)
    }
    const deleteTask=(index)=>{
        const updatedTasks=tasks.filter((task)=>task.id!=index)
        setTasks(updatedTasks)
    }

  return (
    <div className='p-2'>
        <h1 className='text-3xl text-center text-black mb-4'>Task Manager</h1>
        <div className='flex flex-wrap justify-between bg-gray-300 border border-gray-400 p-3 mb-4 sticky top-0'>
          <AddTaskForm addNewTasks={addNewTasks} tasks={tasks}/>
          <div className="flex gap-3">
          <div className='bg-gray-200 border border-gray-400 px-3 py-2 text-center min-w-35'>
            <p className='text-xs text-black'>Task Count</p>
            <p className='text-xl text-black'>{tasks.length}</p>
          </div>
          <div className='bg-gray-200 border border-gray-400 px-3 py-2 text-center min-w-35'>
            <p className='text-xs text-black'>Completed Tasks</p>
            <p className='text-xl text-black'>{tasks.filter(task => task.isComplete).length}</p>
          </div>
        </div>
        </div>
        <TaskList tasksList={[...tasks]} changeTaskState={changeTaskState} deleteTask={deleteTask}/>
    </div>
  )
}

export default TaskManager