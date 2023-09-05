import Note from '@/components/note/Note'
import { Inter } from 'next/font/google'
import Logo from '../assets/ragnote-logo.png'
import Image from 'next/image'
import Link from 'next/link'
import Modal from '@/components/modal/Modal'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <div className="h-full w-2/6 fixed top-0 overflow-x-hidden left-0 bg-emerald-600 flex items-center justify-center flex-col">
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
        <Image
          src={Logo}
          alt="Cat"
          width={350}
          height={350}
          className="z-10"
        />
        <p className='text-7xl font-bold text-yellow-400'>Ragnote</p>
        <div className="w-4/5 absolute h-4/6 bg-black z-0 opacity-5 rounded-t-full bottom-0" />
      </div>
      <div className="h-full w-4/6 fixed top-0 overflow-x-hidden right-0 bg-gray-200 p-5 items-center justify-center flex flex-wrap gap-5">
        <Note />
      </div>
    </div >
  )
}
