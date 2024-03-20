import React from 'react';
import { Label, TextInput, Button } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function SignUp() {
  const [formData, setFormData] = useState({});
  const handleChanges = (e) => {
    setFormData({...formData, [e.target.id]: e.target.value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try{
      const res = await fetch('/api/auth/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify(formData),
      });

      const data = await res.json();
      console.log(data);
    } catch (error){

    }
    
    
  }

  console.log(formData);

  return (
    <div className="min-h-screen mt-20">
      <div className="flex gap-4 p-3 max-w-3xl mx-auto flex-col md:flex-row">
        {/* bagian kiri */}
        <div className='flex-1 my-auto'>
          <Link to="/">
            <span className='text-3xl text-bold pb-3'>
                Sign In
            </span>
          </Link>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis voluptatem consequuntur tempore.</p>
        </div>

        {/* bagian kanan */}
        <div className="flex-1">
          <form onSubmit={handleSubmit}>
            <div>
              <Label value="Your Username" />
              <TextInput onChange={handleChanges}
               type="text"
               placeholder='Your Username...'
               id="username"/>
            </div>
            <div>
              <Label value="Your Email" />
              <TextInput onChange={handleChanges}
               type="email"
               placeholder='Email...'
               id="email"/>
            </div>
            <div>
              <Label value="Your Password" />
              <TextInput onChange={handleChanges}
               type="password"
               placeholder='Password'
               id="password"/>
            </div>
            <Button gradientDuoTone='purpleToPink' type='submit' className='my-2 w-full'>
              Sign Up
            </Button>
            
            <div className='flex gap-3 text-sm'>
              <span>Have an account? </span>
              <Link to='/sign-in' className='text-blue-500'>
                Sign In
              </Link>
            </div>

          </form>
        </div>

      </div>
    </div>
  )
}
