import React from 'react'
import { IconButton } from "@material-tailwind/react";
import { Line } from '../assets';
import { facebook } from '../assets';

const Home = () => {
  return (
    <div className='w-full h-[auto] '>
      <div className=' relative justify-center items-center w-full'>
        <div className='  bg-fixed bg-top text-white flex justify-center items-center bg-no-repeat' style={{width: '100%', height: '100%', backgroundImage: `url("https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80")` }}>
              <div className='sm:w-[1200px] justify-center items-center flex w-[auto] h-[700px] sm:h-[750px] sm:relative '>
                <div className=' bg-black h-[350px] bg-opacity-50  p-4 sm:absolute sm:left-3 sm:bottom-11'>
                  <p className=' font-bold text-left text-5xl'>Hello World</p>
                  <p className=' text-base text-left '>Hello World</p>
                  <p className=' text-xl text-left '>Hello World Hello </p>
                  <p className=' text-xl text-left '>Hello World Hello </p>
                  <p className=' text-xl text-left '>Hello World Hello </p>
                  <p className=' text-xl text-left '>Hello World Hello </p>
                  <p className=' text-xl text-left '>Hello World Hello </p>
                  <p className=' text-xl text-left '>Hello World Hello </p>

                  <div className='flex gap-3 py-3'>
                    <button className=" w-16 sm:w-24  ">
                      <img src={Line} alt="line" />
                    </button>

                    <button className=" w-14 sm:w-20  ">
                      <img src={facebook} alt="facebook" />
                    </button>

                    <button className=" w-16 sm:w-24  ">
                      <img src={Line} alt="line" />
                    </button>
                  </div>
                </div>
               
              </div>
              <div className=' w-full h-8  absolute  inset-x-0 bottom-0 ' style={{backgroundImage: 'linear-gradient(0deg, rgba(255,255,255,0.9990371148459384) 65%, rgba(255,255,255,0.6012780112044818) 100%)'}} />
        </div>
      </div>
    </div>
  )
}

export default Home