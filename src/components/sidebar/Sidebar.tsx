import Logo from '../../assets/ragnote-logo.png'
import Image from 'next/image'
import { ISidebar } from './Sidebar.interfaces'

const Sidebar = (props: ISidebar) => {
    const { children } = props
    return (
        <div className="h-full w-2/6 fixed top-0 overflow-x-hidden left-0 bg-emerald-600 flex items-center justify-center flex-col" >
            {children}
            <Image
                src={Logo}
                alt="Cat"
                width={350}
                height={350}
                className="z-10"
            />
            <p className=' font-bold text-yellow-400 text-5xl md:text-7xl'>Ragnote</p>
            <div className="w-4/5 absolute h-4/6 bg-black z-0 opacity-5 rounded-t-full bottom-0" />
        </div>
    )
}

export default Sidebar