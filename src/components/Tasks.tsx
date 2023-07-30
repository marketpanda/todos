import React, { useState } from 'react'
 
 
export default function Tasks({tasks, setTasks}:any) { 
  
  const RemoveTask = (id:string) => {
    setTasks((currentTasks:any) => {
      return currentTasks.filter((task: { id: string }) => task.id != id)       
    })
    console.log('removed', id)
     
  }
 

  const parseTime = (t:string) => {
    return new Date(t).toLocaleString()  
  }

  const changeStatus = (id:string, status:string) => {
    
     
    setTasks((prevTasks:any) =>  
      prevTasks.map((task:any) => 
        task.id == id ? {... task, status:status} : task
      )
    )
    console.log(id, status)
    console.log(tasks)
 
  }
 
  return (
      <>
        <div className='taskBar'> 
          <ul>
           
            
            {
              tasks.map(
                (task: { task: string, id:string, status: string, time:string}) =>  {
                  return <li key={task.id}>
                    <span>
                    {task.task}
                    <div className='date'>{parseTime(task.time)}</div>
                    </span>
                    
                    <span className='taskRightIcons'>
                        
                        <span className='statusWrap'>
                          <button className={task.status == 'todo' ? "bStatus" : ""} onClick={() => changeStatus(task.id, 'todo')}>TODO</button>
                          <button className={task.status == 'inprogress' ? "bStatus" : ""} onClick={() => changeStatus(task.id, 'inprogress')}>IN PROGRESS</button>
                          <button className={task.status == 'completed' ? "bStatus" : ""} onClick={() => changeStatus(task.id, 'completed')}>COMPLETED</button>
                          {/* {task.status} */}

                          <button onClick={() => RemoveTask(task.id)} > x </button> 
                        </span> 
                        
                    </span>
                  </li>
                } 
              )
            } 
          </ul> 
        </div>   
      </> 
    )
} 