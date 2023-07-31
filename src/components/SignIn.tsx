import React, {useState} from 'react'
import { auth, providerGoogle } from './Firebase';
import {signInWithEmailAndPassword, signInWithPopup} from 'firebase/auth';
import axios from 'axios';
 
const LOGIN_URL = '/auth'



export default function SignIn ({
    logged, setLogged
  }:any) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [success, setSuccess] = useState(false);
   
  const signInEmail = async (e:React.SyntheticEvent) => {
    e.preventDefault(); 
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        // @ts-ignore
        const response = axios.post(
          LOGIN_URL ,
          JSON.stringify({email, password}),
            {
              headers: {'Content-Type': 'application/json'},
              withCredentials: true
            }
        )
         
        setSuccess(true)
        setLogged(true)
        console.log(userCredentials)


        localStorage.setItem('email', email) 
        console.log('google ', email) 

 

      }).catch((error) => {
         
        const errorMessage = error.message
        console.log(errorMessage)
      }) 
  } 

  const viaGoogle = () => {
    signInWithPopup(auth, providerGoogle).then((data:any) => {
      
      // localStorage.setItem('email', data.user.email)
      // localStorage.setItem('avatar', data.user.photoURL)
      // localStorage.setItem('username', data.user.displayName)

      setEmail(data.user.email)
      setSuccess(true)
      setLogged(true)

      localStorage.setItem('email', data.user.email)
       
       
       

      console.log(data)
      console.log('google ', email) 
      
    })
  }

 

  return (
    <>
      {
        success ? (
          <>
            Hi there!
          </>


        ) : (
          <>
            <form onSubmit={signInEmail}>
              <h3>Log In</h3>

              <div className='condensed'>
                <label htmlFor="username">Username</label>
                <input id="username" value={email} type="text" onChange={(e) => setEmail(e.target.value)} />
              </div>

              <div className='condensed'>
                <label htmlFor="password">Password</label>
                <input value={password} type="password" onChange={(e) => setPassword(e.target.value)}  /> 
              </div> 

              <button className='minButton'>Sign In</button>
              <div className='signInOptions'> 
                <button className='minButton' onClick={viaGoogle}>Sign In with Google</button> 
              </div> 
            </form>
          </> 
        )
      }
        
      

 
        
      
    </>
    
  )
}

 