import React from 'react';
import { Label, TextInput, Button } from 'flowbite-react';
import { Link } from 'react-router-dom';

export default function SignUp() {
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
          <form action="">
            <div>
              <Label value="Your Username" />
              <TextInput
               type="text"
               placeholder='Your Username...'
               id="username"/>
            </div>
            <div>
              <Label value="Your Email" />
              <TextInput
               type="email"
               placeholder='Email...'
               id="email"/>
            </div>
            <div>
              <Label value="Your Password" />
              <TextInput
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
