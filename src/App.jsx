import React from 'react'
import TaskManager from './components/TaskManager'

const App = () => {
  return (
    <div className="mx-auto px-8">
      <h1 className="text-2xl font-bold my-4">Task Manager</h1>
      <TaskManager />
    </div>
  )
}

export default App