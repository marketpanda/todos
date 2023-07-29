 
import { v4 as taskId } from 'uuid';

export function AddTask ({newTask, setNewTask, tasks, setTasks, e}:any) {

    if (newTask == '') return

    const getId = taskId();
    const getTime = Date.now()
     
     
    e.preventDefault();
    setTasks((current:string) => 
      [...current, { id: getId, task: newTask, time: getTime }]
     ) 
    console.log([...tasks, { id: getId, task: newTask, time: getTime}])
    setNewTask('')

  }
 
  const Edit = () => {
    console.log('edit')
  }

 

