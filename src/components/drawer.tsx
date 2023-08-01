"use client"
import React, { useState } from 'react'
import useSWR from 'swr'
import fetcher from '../../lib/fetcher'
import Image from 'next/image'
import { LinkProps } from '../../type'
import Link from 'next/link'
import useDrawer from '../../hooks/useDrawer'

type Props = {}

const Drawer:React.FC<Props> = () => {
  const { data, error, isLoading } = useSWR('/api/link', fetcher)
  const {show,setShow} = useDrawer()


  return (
 
        <div className={`${show?'translate-x-0':'-translate-x-full'} h-screen w-[160px] 
        fixed flex-col top-0 left-0 z-40 flex items-center  bg-neutral-800 text-white transition-transform duration-200`}>
            <Image onClick={()=>setShow()}
                    src='/icon/close.png' width={30} height={30} alt='logo' className=' absolute top-2 right-2 cursor-pointer' />

            <Image src='/logo/logo.png' width={100} height={50} alt='logo' className='pt-10 pb-5'/>
            {
            data?.map((link:LinkProps)=>(
                <Link   onClick={()=>setShow()}
                        href={`#${link.general_title}`}
                    className='flex items-center w-full gap-4 my-1 h-10 justify-center rounded-md hover:bg-gray-300 cursor-pointer' key={link.general_title}>
                    <Image src={link.icon} alt='icon' width={20} height={20} style={{filter:"brightness(100%) contrast(0%)"}}/>
                    <p className='text-md '>
                        {link.general_title.substring(0,4)}
                    </p>
                </Link>
            ))
            }
        </div>
    
   
  )
}

export default Drawer