import { useRef, useState } from 'react' 
import './App.css'
import { v4 as taskId } from 'uuid';
 

export default function App() {

  interface ATask {
    id:string,
    task: string,
    time: EpochTimeStamp
  }

  const logTime = new Date()

  const [newTask, setNewTask] = useState('')
  const [tasks, setTasks] = useState<ATask[]>([])
   


  
  const addTask = (e:any) => {
    const getId = taskId();
    const getTime = Date.now()
     
    e.preventDefault();
    setTasks((current) => 
      [...current, { id: getId, task: newTask, time: getTime }]
     ) 
    console.log([...tasks, { id: getId, task: newTask, time: 'now'}])
    setNewTask('')
  }

  
   

  const Edit = () => {
    console.log('edit')
  }

  
  const RemoveTask = (id:string) => {
    
    console.log('removed', id)
    setTasks(currentTasks => {
      return currentTasks.filter(task => task.id != id)       
    })
  }
   
  const Tasks:any = () => {
    return (
      <>
        <div>
          
          <ul>
            {
              tasks.map(
                task =>  {
                  return <li>
                  {task.task}
                  <div className='date'>{logTime.getDay()}</div>
                  <span>
                    <button onClick={() => Edit()} >
                      Edit
                    </button>
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


  return (
    <>
      <div  className='wrap'>
        <h3><span className='title'>Tasks</span></h3>
        
        <div className='form'>
          <form>
            <input 
              type="text" 
              placeholder='Type task here'
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
               
            
            />
            <button onClick={addTask}>Add</button> 
          </form> 
        </div>
        <Tasks />
      </div>
      
    </>
  )
}


