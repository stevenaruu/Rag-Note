import InputForm from "@/components/input_form/InputForm"
import Link from "next/link"
import Image from 'next/image'
import Cat from '../../assets/cat-with-books.png'

const LoginPage = () => {
    return (
        <div className="h-screen">
            <div className="h-full w-2/4 absolute left-0 bg-gray-200 px-36 flex justify-center items-center flex-col">
                <div className="w-full">
                    <div className="text-gray-600 font-bold text-4xl">
                        <p>Selamat datang</p>
                        <p>Kembali di Ragnote</p>
                    </div>
                    <div className="mt-5 text-gray-600 font-medium text-base">
                        <p>Belum punya akun? <Link href={"/register"} className="text-blue-500 underline underline-offset-1 cursor-pointer">Daftar, yuk!</Link></p>
                    </div>
                </div>
                <div className="mt-10 h-8 w-52 bg-red-600 rounded-full flex justify-center items-center cursor-pointer">
                    <button className="text-white font-medium text-sm">Masuk dengan Google</button>
                </div>
                <hr className="mt-10 mb-10 bg-gray-300 h-1 w-full" />
                <form action="" className="w-full">
                    <InputForm
                        type="text"
                        placeholder="steve@unsworth.id"
                        label="Email"
                    />
                    <InputForm
                        type="password"
                        placeholder="************"
                        label="Password"
                    />
                    <div className="mt-10 w-full flex items-center justify-center">
                        <button className="h-8 w-52 bg-emerald-600 rounded-full text-white font-medium text-sm">Masuk</button>
                    </div>
                </form>
            </div>
            <div className="h-full w-2/4 absolute right-0 bg-emerald-600 flex justify-center items-end">
                <Image
                    src={Cat}
                    alt="Cat"
                    width={500}
                    height={500}
                    className="z-10"
                />
                <div className="w-3/5 absolute h-5/6 bg-black z-0 opacity-5 rounded-t-full" />
            </div>
        </div >
    )
}

export default LoginPage