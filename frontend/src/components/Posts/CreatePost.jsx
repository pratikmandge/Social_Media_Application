import React from 'react'
import {BiEditAlt} from 'react-icons/bi'
import {TbPhotoUp} from 'react-icons/tb'
const CreatePost = () => {
  return (
    <div className='bg-white h-[280px] w-full my-5 rounded-xl'>
        <div className='h-20 px-5 w-full flex pt-2 space-x-4 items-center' >
            <div><BiEditAlt className='bg-gray-200 rounded-full px-2 text-blue-700 font-bold text-xl' size={40}/></div>
            <p className='font-bold text-gray-500'>Create Post</p>
        </div>
        <div className='h-[150px] w-full bg-white p-3'>
            <textarea className='w-full h-full rounded-lg border-2 p-2'placeholder="What's on your mind?"></textarea>
        </div>
        <div className='bg-white h- w-full px-4 flex space-x-2'><TbPhotoUp className='text-pink-500' size={30}/>
            <p className='font-semibold text-gray-600'>Photo/Video</p>
        </div>
    </div>
  )
}

export default CreatePost