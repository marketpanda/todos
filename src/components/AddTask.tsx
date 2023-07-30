 
import { v4 as taskId } from 'uuid';

// @ts-ignore
export function AddTask ({newTask, setNewTask, tasks, setTasks, e}:any) {
    e.preventDefault();
    if (newTask == '') return

    const getId = taskId();
    const timeStamp = Date.now()
    
    const update = [...tasks, { id: getId, task: newTask, time: timeStamp, status: 'todo' }]
    setTasks(update)
    setNewTask('')

    console.log([...tasks, { id: getId, task: newTask, time: timeStamp, status: 'todo'}])

    localStorage.setItem('theTasks', JSON.stringify(update))
    //setNewTask('')

  }
 
 

 

