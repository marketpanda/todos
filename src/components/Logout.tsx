import React, {useEffect} from 'react'

const Logout = ({logged, setLogged}:any) => {

   
  useEffect(() => {
    console.log('logging out')
    setLogged(false)
  }, [])
  
  return (
    <div>You have been logged out</div>
  )
}

export default Logout