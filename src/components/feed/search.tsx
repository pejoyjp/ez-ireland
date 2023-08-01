import React, { useEffect, useState } from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import Image from 'next/image'
import useDrawer from '../../../hooks/useDrawer'

type Props = {}


const Search = (props: Props) => {

  const drawer = useDrawer()

  
  return (
    <div className='h-[160px] w-full flex justify-center items-center bg-moher bg-cover relative '>
      <Image  onClick={()=>drawer.setShow()}
              src="/icon/menu.png" height={20} width={20} alt='munu' className='cursor-pointer absolute top-4 left-4 md:hidden' />

      <div className='absolute top-4 right-4  gap-2 items-center font-bold text-neutral-200 hidden md:flex'>
        <Image src="/icon/like.png" height={20} width={30} alt='like'/>
        <p className=' text-lg '>
          喜欢的话别忘了加个收藏 :)
        </p>
        
      </div>

      <div className='flex items-center justify-center w-8/12 relative hover:w-9/12 transition-width duration-300 '>
        <input
          placeholder='搜索'
          className='h-[40px] w-full py-2 px-4  rounded-2xl shadow-md focus:outline-none focus:border-none '
        />
        <div className='absolute right-0 flex items-center px-2 h-full'>
          <AiOutlineSearch size={30} />
        </div>
      </div>

    </div>
  )
}

export default Search