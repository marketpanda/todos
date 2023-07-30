 
import { v4 as taskId } from 'uuid';

export function AddTask ({newTask, setNewTask, tasks, setTasks, e}:any) {
    e.preventDefault();
    if (newTask == '') return

    const getId = taskId();
    const timeStamp = Date.now()
    // const getTime = new Date(timeStamp).toLocaleString() + ''
  
     
     
     
   
    setTasks((current:string) => 
      [...current, { id: getId, task: newTask, time: timeStamp, status: 'todo' }]
     ) 
    console.log([...tasks, { id: getId, task: newTask, time: timeStamp, status: 'todo'}])
    setNewTask('')

  }
 
  const Edit = () => {
    console.log('edit')
  }

 

