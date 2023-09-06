import Sidebar from '@/components/sidebar/Sidebar'
import Link from 'next/link'

const _404Page = () => {
    return (
        <div>
            <Sidebar>
                {null}
            </Sidebar>
            <div className="h-full w-4/6 fixed top-0 overflow-x-hidden right-0 flex justify-center flex-col items-center bg-gray-200">
                <div className="text-emerald-600">
                    <p className="text-9xl font-bold">404</p>
                    <p className="text-3xl mt-5 mb-2 font-bold">Oops! You&apos;re lost.</p>
                    <p className="text-lg font-semibold">The page you are looking for does not exist. How you got here is a mystery. But you can click the button below to go back to the application.
                    </p>
                    <Link href={"/"} className="font-semibold mt-8 h-12 w-52 bg-emerald-600 rounded-xl text-white text-sm flex items-center justify-center">Back to Homepage</Link>
                </div>
            </div>
        </div>
    )
}

export default _404Page