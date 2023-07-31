"use client"
import React from 'react'
import useSWR from 'swr'
import fetcher from '../../../lib/fetcher'
import Link from './link'
import { LinkProps } from '../../../type'

type Props = {
  data:LinkProps[]
}

const WebNavbars:React.FC<Props> = ({data}) => {


  return (
    
       <div className='w-full p-2'>
        {
          data?.map((link:LinkProps)=>(
            <Link key={link.general_title} link={link} />
          ))
        }
       </div>
   
  )
}

export default WebNavbars