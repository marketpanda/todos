import React, {useState} from 'react'

export default function SignIn () {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  

  const signInUser = (e:React.SyntheticEvent) => {
    e.preventDefault()
    console.log('registering...')
    setUsername('')
    setPassword('')
     
  }


  return (
    <form onSubmit={signInUser}>
      <h3>Log In</h3>

      <div className='condensed'>
        <label htmlFor="username">Username</label>
        <input id="username" value={username} type="text" onChange={(e) => setUsername(e.target.value)} />
      
      </div>
      <div className='condensed'>
        <label htmlFor="password">Password</label>
        <input value={password} type="password" onChange={(e) => setPassword(e.target.value)}  />
      
      </div>



     
      
      
       
       
      <button>Sign In</button>

    </form>
  )
}

 