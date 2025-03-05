import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import {UserDataContext} from '../context/UserContext'


const UserLogin = () => {

  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  // const [userData,setUserData]=useState({});
  const navigate=useNavigate();
  const {user,setUser}=useContext(UserDataContext);

  const submitHandler= async (e)=>{
    e.preventDefault();
   
    const userData=({
     email:email,
      password:password,
    })
    // console.log(userData)
    const response=await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`,userData);
    if(response.status === 200){
      const data=response.data;
      setUser(data.user);
      localStorage.setItem('token', data.token);
      navigate('/home');

    }
    setEmail('');
    setPassword('');

  }



  return (
    <div className='p-7 flex flex-col justify-between h-screen '>
      <div >
        <img className='w-16 mb-10'src="https://upload.wikimedia.org/wikipedia/commons/5/58/Uber_logo_2018.svg" alt="" />
      <form 
      onSubmit={(e)=>{submitHandler(e)}} >
        <h3 className='text-xl mb-2'>What's your email</h3>
        <input 
        value={email}
        onChange={(e)=>{setEmail(e.target.value)}}
        className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base' required type="text" placeholder='email@example.com'/>
        
        <h3 className='text-xl mb-2'>Enter Password</h3>
        <input 
        value={password}
        onChange={(e)=>{setPassword(e.target.value)}}
        className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base' required type="password" placeholder='Password' />
        
        <button className='bg-[#111] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base text-white'>Login</button>
        <p className='text-center'>Are you new ? <Link to='/signup' className='text-blue-600'>Create new Account</Link></p>
      </form>
      </div>

      <div>
        <Link to='/captain-login' className='bg-[#10b462] flex items-center justify-center mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base text-white'>Sign in as Captain</Link>
      </div>
    </div>
  )
}

export default UserLogin