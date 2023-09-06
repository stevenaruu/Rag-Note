import Logo from '../assets/ragnote-logo.png'
import Image from 'next/image'
import Link from 'next/link'

const _404Page = () => {
    return (
        <div>
            <div className="h-full w-2/6 fixed top-0 overflow-x-hidden left-0 bg-emerald-600 flex items-center justify-center flex-col">
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
            <div className="h-full w-4/6 fixed top-0 overflow-x-hidden right-0 flex justify-center flex-col items-center bg-gray-200">
                <div className="text-emerald-600">
                    <p className="text-9xl font-bold">404</p>
                    <p className="text-3xl mt-5 mb-2 font-bold">Oops! You&apos;re lost.</p>
                    <p className="text-lg font-semibold">The page you are looking for does not exist. How you got here is a mystery. But you can click the button below to go back to the application.
                    </p>
                    <Link href={"/login"} className="font-semibold mt-8 h-12 w-52 bg-emerald-600 rounded-xl text-white text-sm flex items-center justify-center">Back to Homepage</Link>
                </div>
            </div>
        </div>
    )
}

export default _404Page