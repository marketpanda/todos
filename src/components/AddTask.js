import { v4 as taskId } from 'uuid';
export function AddTask({ newTask, setNewTask, tasks, setTasks, e }) {
    e.preventDefault();
    if (newTask == '')
        return;
    const getId = taskId();
    const timeStamp = Date.now();
    const update = [...tasks, { id: getId, task: newTask, time: timeStamp, status: 'todo' }];
    setTasks(update);
    console.log([...tasks, { id: getId, task: newTask, time: timeStamp, status: 'todo' }]);
    localStorage.setItem('theTasks', JSON.stringify(update));
    //setNewTask('')
}
