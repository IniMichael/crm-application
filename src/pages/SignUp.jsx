import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import {useHistory} from 'react-router-dom';

function SignUp() {
  const history = useHistory()
  return (
    <div className='flex justify-center items-center text-xl my-4'>
        <div className='flex justify-center items-center mr-20'>
          <img src="heroImage.png" alt="HeroImage" className=''/>
        </div>

        <div className='h-full mr-5'>
          <div className='text-center'>
          <p className='font-semibold text-source-sans-3 text-3xl'>Sign Up to <span className='font-normal  text-source-serif'>Event</span><span className='font-black text-source-serif text-[#669083]'>Buddy</span></p>
          <p className='pb-8'>Please fill this form to create an account</p>
          </div>

          <button className='flex justify-center border border-[#7E7E7E] rounded-xl w-[450px] h-[56px] items-center gap-4 mb-3'>
            Continue with Google <img src="google.png" alt="GooleLogo" />
          </button>
          <p className='text-center'>OR</p>

          <form action="" className='flex flex-col justify-center'>
            <div className='flex flex-col text-lg'>
            <label htmlFor="Name">Name</label>
            <input type="text" className='border border-[#7E7E7E] rounded-xl w-[450px] h-[56px] pl-3' required/>
            </div>

            <div className='flex flex-col text-lg'>
            <label htmlFor="Email">Email Address</label>
            <input type="email" className='border border-[#7E7E7E] rounded-xl w-[450px] h-[56px] pl-3' required/>
            </div>

            <div className='flex flex-col text-lg relative'>
            <label htmlFor="Password">Password</label>
            <input type="password" className='border border-[#7E7E7E] rounded-xl w-[450px] h-[56px] opacity-50 pl-3 text-[#1E1E1E] mb-6' placeholder="********************" required/>
            <FontAwesomeIcon icon={faEyeSlash} className='absolute right-3 top-[67px] cursor-pointer'/>
            </div>

            <div className='m-auto'>           
            <button className='text-white bg-black w-[170px] h-[56px] rounded-xl text-xl mb-1' onClick={() => history.push('/Login')}>
              Sign Up
            </button>             
            </div>
          </form>

          <p className='flex justify-center gap-1 text-[#5D5D5D]'>Already have an account?
          <a href=""><span className='italic font-semibold text-[#5D5D5D]' onClick={() => history.push('/Login')}>Sign in</span>
          </a>
          </p>
        </div>
        </div>
  );
}

export default SignUp;