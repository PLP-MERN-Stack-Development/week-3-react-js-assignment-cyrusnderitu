import React from 'react'
import TaskManager from './components/TaskManager'

const App = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Task Manager</h1>
      <TaskManager />
    </div>
  )
}

export default App