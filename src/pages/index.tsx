import { Inter } from 'next/font/google'
import { useRouter } from 'next/router'
import Note from '@/components/note/Note'
import Sidebar from '@/components/sidebar/Sidebar'
import Button from '@/components/button/Button'
import Link from 'next/link'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import { INote } from '@/interfaces/Note.interfaces'
import AddNote from '@/components/add_note/AddNote'
import SkeletonNote from '@/components/skeleton_note/SkeletonNote'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    const { push } = useRouter()
    const [notes, setNotes] = useState([])
    const [searchValue, setSearchValue] = useState('')

    useEffect(() => {
        axios.get('api/notes')
            .then((response) => {
                setNotes(response.data.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
    
    const handleLogin = () => {
        push('/login')
    }

    const handleSearch = (e:  React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearchValue(value)
    }
    const filteredNotes = notes.filter((note: INote) => note.title.toLowerCase().includes(searchValue.toLowerCase()))
    
    return (
        <div>
            <Sidebar>
                <div className='fixed top-0 mt-5 w-2/6 px-5'>
                    <div className='flex items-center justify-between gap-5'>
                        <Button variant="bg-yellow-400 mt-2">
                            <Link href={"/login"}>Masuk</Link>
                        </Button>
                        <input
                            type="text"
                            className="w-full mt-2 px-5 py-2 focus:outline-none rounded-lg text-gray-600 font-medium text-sm"
                            placeholder='Search...'
                            onChange={handleSearch}
                        />
                    </div>
                </div>
            </Sidebar>
            <div className="h-full w-4/6 fixed top-0 overflow-x-hidden right-0 bg-gray-200 p-5 items-center justify-center flex flex-wrap gap-5">
                {notes.length > 0 ? (
                    filteredNotes.map((note: INote) => (
                        <Note
                            key={note.id}
                            id={note.id}
                            title={note.title}
                            content={note.content}
                            userId={note.userId}
                        />
                    ))
                ) : ( 
                    Array(5).fill(undefined).map((_, index) => (
                        <SkeletonNote key={index}/>
                    ))
                )}
                <AddNote />
            </div>
        </div >
    )
}
