import { React, useState } from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  let navigate = useNavigate();

  const handleLogin = async () => {
    const formData = new FormData();
    formData.append('username', username)
    formData.append('password', password)
    try {
      const response = await fetch('http://127.0.0.1:8000/login', {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: formData
      });
      console.log(response)
      if (!response.ok) {
        throw new Error('Something went wrong');
      }
    } catch (error) {
      console.error('Error:', error);
    }
 };

  return (
    <div className = 'main-div'>
        <div className = 'left-login-div'></div>
        <div className = 'center-div'>
            <h2 className = 'welcome-text'>TA.AI Login</h2>
            <form onSubmit = {handleLogin}>
                <input className = 'email' id = "email" type = "text" placeholder='  Email' onChange={(e) => {setUsername(e.target.value)}}/>
                <input className = 'password' id = "password" type = "password" placeholder='  Password' onChange={(e) => {setPassword(e.target.value)}}/>
                <input className = 'login' type = "submit" value = "Login"/>
                <button className = 'signup'>Sign Up</button>
            </form>
        </div>
        <div className = 'right-div'></div>
    </div>
  )
}

export default Login;