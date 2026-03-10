import React from 'react'
import TaskItem from './TaskItem'
import { useState } from 'react'

function TaskList({tasksList,changeTaskState,deleteTask}) {
  return (
    <div className='flex flex-col gap-2'>
      <div className='bg-white border border-gray-400 p-3'>
          <h2 className='text-xl text-black mb-2'>Task List</h2>
        {
          tasksList.length==0?
          (<div className="text-center py-5 text-gray-600">
            <p className="text-sm">No tasks yet</p>
            <p className="text-xs">Add a task to get started</p>
          </div>)
          :(
          <div className='flex flex-col gap-2'>
            {
            tasksList.filter((taskObj)=>!taskObj.isComplete).map((taskObj)=><TaskItem key={taskObj.id} taskObj={taskObj} changeTaskState={()=>changeTaskState(taskObj.id)} deleteTask={()=>deleteTask(taskObj.id)}/>)
            }
            </div>
          )
        }
      </div>
      <div className='bg-white border border-gray-400 p-3'>
            <h2 className='text-xl text-black mb-2'>Completed Tasks</h2>
            {
              tasksList.length==0?
              (<div className="text-center py-5 text-gray-600">
                <p className="text-sm">No tasks yet</p>
                <p className="text-xs">Add a task to get started</p>
              </div>)
              :(tasksList.filter(task=>task.isComplete).length)==0?
              (
              <div className="text-center py-5 text-gray-600">
                <p className="text-sm">No Tasks Completed Yet....!</p>
                </div>
              )
              :
              (
              <div className='flex flex-col gap-2'>
                {
                  tasksList.filter((taskObj)=>taskObj.isComplete).map((taskObj)=><TaskItem key={taskObj.id} taskObj={taskObj} changeTaskState={()=>changeTaskState(taskObj.id)} deleteTask={()=>deleteTask(taskObj.id)}/>)
                }
                </div>
              )
          }
      </div>
    </div>
  )
}

export default TaskList