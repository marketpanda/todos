// @ts-ignore
import React from 'react'
import { AddTask } from './AddTask'
  
export default function TaskForm ({newTask, setNewTask, setTasks, tasks}:any) {

     
    return (
        <div className='addTaskForm'>
            
            <form>
                <input 
                    type="text" 
                    placeholder='Type task here'
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)} 
                /> 
                <button onClick={(e) => AddTask({newTask, setNewTask, tasks, setTasks, e})}>Add</button> 
            </form> 
        </div> 
    )
}


 