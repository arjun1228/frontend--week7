import React from 'react'
import { useState } from 'react'

function TaskItem({taskObj,changeTaskState,deleteTask}) {
return (
  <div className="bg-white border border-gray-400 p-2">
    <div className="flex items-center justify-between">
      <div>
        <h3 className={`text-base ${taskObj.isComplete ?"line-through text-gray-500":"text-black"}`}>
          {taskObj.title}
        </h3>
        <span className={`text-xs px-1 border border-black text-black 
        ${taskObj.priority === "high"?"bg-gray-300":taskObj.priority==="medium"?"bg-gray-200":"bg-gray-100"}`}>
          {taskObj.priority}
        </span>
      </div>
      <div className="flex gap-2">
        <button onClick={changeTaskState} className={`px-2 py-1 text-xs border border-black ${taskObj.isComplete?"bg-gray-300":"bg-white"}`}>
          {taskObj.isComplete ? "Completed" : "Mark Done"}
        </button>
        <button onClick={deleteTask} className="px-2 py-1 text-xs border border-black bg-gray-400">Delete</button>
      </div>
    </div>
  </div>
)
}

export default TaskItem