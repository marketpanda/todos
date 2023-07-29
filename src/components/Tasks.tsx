import React, { useState } from 'react'
 
 
export default function Tasks({tasks, setTasks}:any) { 
  
  const RemoveTask = (id:string) => {
    setTasks((currentTasks:any) => {
      return currentTasks.filter((task: { id: string }) => task.id != id)       
    })
    console.log('removed', id)
     
  }
 
  return (
      <>
        <div> 
          <ul>
            {
              tasks.map(
                (task: { task: string, id:string }) =>  {
                  return <li key={task.id}>
                    {task.task}
                    <div className='date'>"date"</div>
                    <span>
                      {/* <button onClick={() => Edit()} >
                        Edit
                      </button>
                      */}
                      <button onClick={() => RemoveTask(task.id)} >
                        x 
                      </button>  
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