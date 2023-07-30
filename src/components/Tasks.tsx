// @ts-ignore
import React, { useState, useEffect } from 'react'
 
 
export default function Tasks({tasks, setTasks}:any) { 

  useEffect(() => {
    const storedTasks = localStorage.getItem('theTasks')
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks))
    }

  }, [])
  
  
  const RemoveTask = (id:string) => {
    const getFilter = tasks.filter((task: { id: string }) => task.id != id)

    setTasks(getFilter)

    localStorage.setItem('theTasks', JSON.stringify(getFilter)) 


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

   

  const sortByName = () => {
    console.log('by name')
    const sortName = [...tasks].sort((a, b) => a.task > b.task ? 1 : -1)
    console.log(sortName)
    setTasks(sortName)
  }

  const sortByDate = () => {
    console.log('by date')
    const sortDate = [...tasks].sort((a, b) => a.time - b.time)
    console.log(sortDate)
    setTasks(sortDate)
  }


  

 
  return (
      <>
        <div className='taskBar'> 
          <div className='sortBox'>
            <div>Sory by:</div>
            <div><a href="#" onClick={sortByName}>Task Name</a> |</div>
            <div><a href="#" onClick={sortByDate}>Date Created</a></div>
          
          </div>
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