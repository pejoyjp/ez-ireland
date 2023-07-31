import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai'

type Props = {}

const Search = (props: Props) => {
  return (
    <div className='h-[160px] w-full flex justify-center items-center bg-moher bg-cover '>
      <div className='flex items-center justify-center w-8/12 relative hover:w-9/12 transition-width duration-300 '>
        <input
          placeholder='搜索'
          className='h-[40px] w-full py-2 px-4 bg-slate-50 rounded-2xl shadow-md focus:outline-none focus:border-none '
        />
        <div className='absolute right-0 flex items-center px-2 h-full'>
          <AiOutlineSearch size={30} />
        </div>
      </div>

    </div>
  )
}

export default Search