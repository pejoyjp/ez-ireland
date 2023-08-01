
import Drawer from '@/components/drawer'
import Feed from '@/components/feed/feed'
import SideBar from '@/components/sidebar'
import { useState } from 'react'


export default function Home() {
  return (
    <main className="flex ">
        <SideBar />
        <Feed/>
        <Drawer />
    </main>
  )
}
