import React, {useState} from 'react'

export default function Signup () {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('')

  const signUpUser = (e:React.SyntheticEvent) => {
    e.preventDefault()
    console.log('registering...')
    setUsername('')
    setPassword('')
    setConfirmPassword('')
  }


  return (
    <form onSubmit={signUpUser}>
      <h3>Sign Up</h3>
      <div className='condensed'>
        <label htmlFor="username">Username</label>
        <input id="username" value={username} type="text" onChange={(e) => setUsername(e.target.value)} />
      </div>

      <div className='condensed'>
        <label htmlFor="password">Password</label>
        <input value={password} type="password" onChange={(e) => setPassword(e.target.value)} />
      </div>

      <div className='condensed'>
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input value={confirmPassword} type="password" onChange={(e) => setConfirmPassword(e.target.value)} /> 
      </div>


      
      
      
       
      <button>Sign Up</button> 
    </form>
  )
}

 