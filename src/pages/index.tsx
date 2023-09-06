import Note from '@/components/note/Note'
import { Inter } from 'next/font/google'
import Logo from '../assets/ragnote-logo.png'
import Image from 'next/image'
import Link from 'next/link'
import Modal from '@/components/modal/Modal'
import Sidebar from '@/components/sidebar/Sidebar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Sidebar>
        <div className='fixed top-0 mt-5 w-2/6 px-5'>
          <div className='flex items-center justify-between gap-5'>
            <Link href={"/login"} className="mt-2 h-8 w-52 bg-yellow-400 rounded-full text-white font-medium text-sm flex items-center justify-center">Login</Link>
            <input
              type="text"
              className="w-full mt-2 px-5 py-2 focus:outline-none rounded-lg text-gray-600 font-medium text-sm"
              placeholder='Search...'
            />
          </div>
        </div>
      </Sidebar>
      <div className="h-full w-4/6 fixed top-0 overflow-x-hidden right-0 bg-gray-200 p-5 items-center justify-center flex flex-wrap gap-5">
        <Note />
      </div>
    </div >
  )
}
