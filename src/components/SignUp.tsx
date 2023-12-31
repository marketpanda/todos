import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, {useEffect, useState} from 'react'
import { auth } from './Firebase';

export default function Signup ({
  logged, setLogged }:any) {

  if (logged) return
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('')
  const [success, setSuccess] = useState<boolean>(false)

  const [validEmail, setValidEmail] = useState(false)
  const [validPassword, setValidPassword] = useState(false) 
  const [errors, setErrors] = useState<string[]>([])


  const regexEmail  = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  const regexPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/

  useEffect(() => {
    setValidEmail(regexEmail.test(email)); 
  }, [email]);

  useEffect(() => { 
    setValidPassword(regexPassword.test(password));
  }, [password]);

    

  const signUpUser = (e:React.SyntheticEvent) => {
 
    e.preventDefault()  
    if (!validEmail) {
      setErrors((prevErrors) => [...prevErrors, 'Invalid email address']);
    }

    if (!validPassword) {
      setErrors((prevErrors) => [...prevErrors, 'Password must be at least 6 characters long and contain at least 1 letter and 1 digit']); 
    }

    if (password !== confirmPassword) {
      setErrors((prevErrors) => [...prevErrors, 'Passwords do not match']); 
    }
   

    if (validEmail && validPassword) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          console.log(userCredential)
          setSuccess(true)
          setErrors([])
          setLogged(true)
          localStorage.setItem('email', email)
        }).catch((error) => {
          console.log(error)
          if (error.code === 'auth/email-already-in-use') {
            setErrors(['Email already exists. Please use a different email.']);
          } else {
            setErrors(['An error occurred during sign-up. Please try again.']);
          }
        })
    
    }
 

    console.log('registering...')
    
    setEmail('')
    setPassword('')
    setConfirmPassword('') 
  }

  const displayErrors = () => {

    if (errors.length == 0) return  
    return (
      <div className='errorHandler'>{
        errors.map((error) => (
          <div key={error}>{error}<br /></div>
        ))
      }</div> 
    )
  }

  return (
    <>
      { success ? <h2>Registration Successful</h2> : (

        <> 
          {displayErrors()} 
          <form onSubmit={signUpUser}>
            <h3>Sign Up</h3>
            <div className='condensed'>
              <label htmlFor="username">Email</label>
              <input id="username" value={email} type="text" onChange={(e) => setEmail(e.target.value)}   />
            </div>

            <div className='condensed'>
              <label htmlFor="password">Password</label>
              <input value={password} type="password" onChange={(e) => setPassword(e.target.value)}   />
            </div>

            <div className='condensed'>
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input value={confirmPassword} type="password" onChange={(e) => setConfirmPassword(e.target.value)}  /> 
            </div> 
            <button className='minButton'>Sign Up</button> 
          </form>
        </>

      )
        
        

      }
      
    </>
  )
}

 