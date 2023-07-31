"use client"
import React from 'react'
import Search from './search'
import WebNavbars from '../web-navbars/web-navbars'
import useSWR from 'swr'
import fetcher from '../../../lib/fetcher'

type Props = {}

const Feed = (props: Props) => {
  const { data, error, isLoading } = useSWR('/api/link', fetcher)
  return (
    <div className='flex-auto md:ml-[150px]'>
        <Search />
        <WebNavbars data={data}/>
    </div>
  )
}

export default Feed