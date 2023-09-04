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
                        <p>Belum punya akun? <span className="text-blue-500 underline underline-offset-1 cursor-pointer">Daftar, yuk!</span></p>
                    </div>
                </div>
                <div className="mt-10 h-8 w-52 bg-red-600 rounded-full flex justify-center items-center cursor-pointer">
                    <p className="text-white font-medium text-sm">Masuk dengan Google</p>
                </div>
                <hr className="mt-10 mb-10 bg-gray-300 h-1 w-full" />
                <form action="" className="w-full">
                    <div className="flex flex-col mb-5">
                        <label
                            htmlFor="email"
                            className="text-gray-600 font-medium text-sm"
                        >
                            Email <span className="text-red-600">*</span>
                        </label>
                        <input
                            type="text"
                            id="email"
                            className="mt-2 px-5 py-3 focus:outline-none rounded-lg text-gray-600 font-medium text-sm"
                            placeholder="steve@unsworth.id"
                        />
                    </div>
                    <div className="flex flex-col mb-5">
                        <label
                            htmlFor="password"
                            className="text-gray-600 font-medium text-sm"
                        >
                            Password <span className="text-red-600">*</span>
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="mt-2 px-5 py-3 focus:outline-none rounded-lg text-gray-600 font-medium text-sm"
                            placeholder="************"
                        />
                    </div>
                    <div className="mt-10 w-full flex items-center justify-center">
                        <button className="h-8 w-52 bg-emerald-600 rounded-full text-white font-medium text-sm">Masuk</button>
                    </div>
                </form>
            </div>
            <div className="h-full w-2/4 absolute right-0 bg-emerald-600">

            </div>
        </div >
    )
}

export default LoginPage