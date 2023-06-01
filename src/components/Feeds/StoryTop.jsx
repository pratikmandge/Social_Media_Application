import React,{useState} from 'react'
import {RxPlus} from "react-icons/rx";
import story from "../../assets/story.jpg";

const StoryTop = () => {

    const [storyData, setStoryData] = useState([
        {}
    ])

  return (
    <div className='flex w-full h-[200px]  items-center justify-center'>
            <div className="overflow-x-auto mt-2 h-[198px] flex whitespace-nowrap w-11/12  space-x-3 scrollbar-hidden">
                <a href='#' className="flex  w-[135px] rounded-lg bg-gray-800">
                    <div className="h-[181px] w-[131px] flex flex-col">
                        <div className=" h-24 w-full">

                        </div>
                        <div className=" h-32 w-full flex flex-col items-center text-white">
                            <div className="rounded-full bg-white w-16 h-16 text-center flex justify-center  items-center text-2xl text-gray-900 font-bold" >
                              <RxPlus/>
                            </div>
                            <p className='font-semibold mt-2'>Add Story</p>
                        </div>
                    </div>
                </a>
                <a href='#' className="flex  w-[135px] rounded-lg bg-gray-800">
                    <div className="h-[181px] w-[131px] flex flex-col relative ">
                        <img className="z-0 rounded-lg h-[181px] " src={story} alt="" />
                        
                        <div className="z-20 absolute bottom-[-20px] h-32 w-full flex flex-col items-center text-white">
                            <div className="rounded-full bg-white w-16 border-4 border-yellow-600 h-16 text-center flex justify-center  items-center text-2xl text-gray-900 font-bold" >
                              <img className='rounded-full' src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" />
                            </div>
                            <p className='font-semibold mt-2'>bhavazz___</p>
                        </div>
                    </div>
                </a>
                <a href='#' className="flex  w-[135px] rounded-lg bg-gray-800">
                    <div className="h-[181px] w-[131px] flex flex-col relative ">
                        <img className="z-0 rounded-lg h-[181px]" src="https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg?cs=srgb&dl=pexels-jacob-colvin-1761279.jpg&fm=jpg" alt="" />
                        
                        <div className="z-20 absolute bottom-[-20px] h-32 w-full flex flex-col items-center text-white">
                            <div className="rounded-full bg-white w-16 border-4 border-yellow-600 h-16 text-center flex justify-center  items-center text-2xl text-gray-900 font-bold" >
                              <img className='rounded-full' src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" />
                            </div>
                            <p className='font-semibold mt-2'>bhavazz___</p>
                        </div>
                    </div>
                </a>
                <a href='#' className="flex flex-col w-[135px]">
                    <div className="flex justify-center items-center h-[181px] w-[131px] rounded-lg bg-green-500">
                        
                    </div>
                </a>
                <a href='#' className="flex flex-col w-[135px]">
                    <div className="flex justify-center items-center h-[181px] w-[131px] rounded-lg bg-green-500">
                        
                    </div>
                </a>
                <a href='#' className="flex flex-col w-[135px]">
                    <div className="flex justify-center items-center h-[181px] w-[131px] rounded-lg bg-green-500">
                        
                    </div>
                </a>
                <a href='#' className="flex flex-col w-[135px]">
                    <div className="flex justify-center items-center h-[181px] w-[131px] rounded-lg bg-green-500">
                        
                    </div>
                </a>
                <a href='#' className="flex flex-col w-[135px]">
                    <div className="flex justify-center items-center h-[181px] w-[131px] rounded-lg bg-green-500">
                        
                    </div>
                </a>
                <a href='#' className="flex flex-col w-[135px]">
                    <div className="flex justify-center items-center h-[181px] w-[131px] rounded-lg bg-green-500">
                        
                    </div>
                </a>
                
                
                

            </div>


        </div>
  )
}

export default StoryTop