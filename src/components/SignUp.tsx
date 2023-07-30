import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, {useEffect, useState} from 'react'
import { auth } from './Firebase';

export default function Signup () {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('')
  const [success, setSuccess] = useState<boolean>(false)


  const [errors, setErrors] = useState<string[]>([])

  const signUpUser = (e:React.SyntheticEvent) => {
    
    e.preventDefault()

    //const USER_REGEX = /^\[A-z\][A-z0-9-_]{3,23}$/;
    //const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
 
    if (email == '') {
      const er = 'Please type a username'
      if (errors.includes(er)) return
      setErrors([...errors, er]) 
    } 

    if (password == '') {
      const er = 'Please type a password'
      if (errors.includes(er)) return
      setErrors([...errors, er])
    } else if ( password != confirmPassword ) {
      setErrors([...errors, 'Passwords do not match'])
    }

    if (errors.length == 0) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          console.log(userCredential)
          setSuccess(true)
        }).catch((error) => {
          console.log(error)
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

  useEffect(() => {
    setErrors([])
  }, [email, password])
 

  return (
    <>
      { success ? <h2>Registration Successful</h2> : (

        <> 
          {displayErrors()} 
          <form onSubmit={signUpUser}>
            <h3>Sign Up</h3>
            <div className='condensed'>
              <label htmlFor="username">Email</label>
              <input id="username" value={email} type="text" onChange={(e) => setEmail(e.target.value)} />
            </div>

            <div className='condensed'>
              <label htmlFor="password">Password</label>
              <input value={password} type="password" onChange={(e) => setPassword(e.target.value)} />
            </div>

            <div className='condensed'>
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input value={confirmPassword} type="password" onChange={(e) => setConfirmPassword(e.target.value)} /> 
            </div> 
            <button className='minButton'>Sign Up</button> 
          </form>
        </>

      )
        
        

      }
      
    </>
  )
}

 