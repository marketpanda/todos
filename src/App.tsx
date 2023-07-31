import { useState } from 'react' 
import './App.css'
 
import { NavLink, Routes, Route } from 'react-router-dom';
import SignUp from './components/SignUp';
import TaskWrap from './components/TaskWrap';
import SignIn from './components/SignIn';
import Front from './components/Front';
import Logout from './components/Logout';
 

export default function App() {
  interface ATask {
    id:string,
    task: string,
    time: string,
    status: string
  }
  
  const [tasks, setTasks] = useState<ATask[]>([])
  const [newTask, setNewTask] = useState('')

  const [logged, setLogged] = useState<boolean>(false)
 
 
  return (
    <>
      <div  className='wrap'>
        <h3><span className='title'>Tasks</span></h3>
        <div className='menus'>
          <ul>
            <li><NavLink className={({isActive}) => (isActive ? 'activeButton' : 'inactiveButton')} to='/'>Home</NavLink></li>
            <li><NavLink className={({isActive}) => (isActive ? 'activeButton' : 'inactiveButton')} to='task_manager'>Tasks Manager</NavLink></li>

            {
              !logged ?  (
                <> 
                  <li><NavLink className={({isActive}) => (isActive ? 'activeButton' : 'inactiveButton')} to='login'>Sign In</NavLink></li>
                  <li><NavLink className={({isActive}) => (isActive ? 'activeButton' : 'inactiveButton')} to='register'>Sign Up</NavLink></li> 
                </>
              ) : (
                <>
                  <li><NavLink className={({isActive}) => (isActive ? 'activeButton' : 'inactiveButton')} to='logout'>Logout</NavLink></li>
                                </>
              )
            }

            
             



          </ul>
        </div> 

        <Routes>
          <Route path='/' element={<Front />}></Route>
          <Route path='register' element={<SignUp logged={logged} setLogged={setLogged} />}></Route>
          <Route path='login' element={<SignIn logged={logged} setLogged={setLogged} />}></Route>
          <Route path='task_manager' element={<TaskWrap newTask={newTask} setNewTask={setNewTask} tasks={tasks} setTasks={setTasks} logged={logged} />}></Route>
          <Route path='logout' element={<Logout logged={logged} setLogged={setLogged} />}></Route>
        </Routes> 
      </div> 
    </>
  )
}


