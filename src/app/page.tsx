import Feed from '@/components/feed/feed'
import SideBar from '@/components/sidebar'


export default function Home() {
  return (
    <main className="flex bg-zinc-100">
        <SideBar />
        <Feed/>
    </main>
  )
}
