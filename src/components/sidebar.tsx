"use client"
import React from 'react'
import useSWR from 'swr'
import fetcher from '../../lib/fetcher'
import Image from 'next/image'
import { LinkProps } from '../../type'
import Link from 'next/link'

type Props = {}

const SideBar = (props: Props) => {
  const { data, error, isLoading } = useSWR('/api/link', fetcher)


  return (
    <div className='hidden md:flex h-screen min-w-[200px] fixed flex-col items-center'>
        <Image src='/logo/logo.png' width={100} height={50} alt='logo' className='py-4 '/>
        {
          data?.map((link:LinkProps)=>(
            <Link href={`#${link.general_title}`}
                  className='flex items-center w-full gap-4 my-1 h-10 justify-center rounded-md hover:bg-gray-300 cursor-pointer' key={link.general_title}>
              <Image src={link.icon} alt='icon' width={20} height={20}/>
              <p className='text-md text-neutral-700'>
                {link.general_title.substring(0,4)}
              </p>
            </Link>
          ))
        }
    </div>
  )
}

export default SideBar