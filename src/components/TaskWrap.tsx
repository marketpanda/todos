// @ts-ignore
import React from 'react'
import TaskForm from './TaskForm'
import Tasks from './Tasks'

export default function TaskWrap ({
  newTask, setNewTask, tasks, setTasks, logged
}:any) { 
  
  return (
    <> 
      
      {
        !logged ? (
          <>
            <h3>Please log in</h3>
          </>
        ) : (
          <>
            <TaskForm newTask={newTask} setNewTask={setNewTask} tasks={tasks} setTasks={setTasks} />
            <Tasks tasks={tasks}  setTasks={setTasks} />
          </>

        )
      }
      
    </>
  )
}
 