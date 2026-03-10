import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TaskManager from './components/TaskManager'

function App() {
  return (
    <div className="min-h-screen bg-linear-to-b ">
      <div className="max-w-1xl mx-auto">
        <TaskManager />
      </div>
    </div>
  )
}

export default App