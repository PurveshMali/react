import React, { useState } from 'react'

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const submitHandler = (e)=>{
        e.preventDefault();
        console.log("Email: ",email)
        console.log("Password: ",password)
        setEmail('')
        setPassword('')
    }
  return (
    <div class='login'>
        <form class='box' onSubmit={(e)=>{
            submitHandler(e)
        }}>
            
        <h1 className='text-3xl font-bold'>Login</h1>
            <input onChange={(e)=>{
                setEmail(e.target.value)
            }} required value={email} type="email" name="" id="" placeholder='Enter email' />

            <input required value={password} onChange={(e)=>{
                setPassword(e.target.value)
            }} type="password" placeholder='Password' />
            <button>Login</button>
        </form>
    </div>
  )
}

export default Login
