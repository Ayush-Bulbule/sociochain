import Link from 'next/link';
import { useState } from 'react'
import { GoSignIn } from 'react-icons/Go'
import { HiEye, HiEyeOff, HiLockClosed, HiUser } from 'react-icons/hi'

export default function Login() {

    const [showPass, setShowPass] = useState(false);
    return (

        <div className="font-Outfit m-0 bg-gray-900 shadow flex justify-center flex-1 h-screen">
            <div className="lg:w-1/2 xl:w-5/12 flex flex-col items-center justify-center p-6 sm:p-12">
                <img src="logo.png" className="h-12 mr-3" alt="Flowbite Logo" />
                <span className={`  mt-3 self-center text-3xl font-semibold whitespace-nowrap dark:text-white text-white `}>Login to Sociochain</span>
                <h2 className='text-white font-medium text-center text-2xl text-2 '></h2>
                <form action="" className="wrapper pt-8 p-16 w-full">
                    <div className="mt-8">
                        <label htmlFor="username" className="text-gray-400 text-xl mb-3">username:</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 top-0 flex items-center pl-3 pointer-events-none">
                                <HiUser className='text-xl' />
                            </div>
                            <input type="text" id="email-address-icon" className="py-3 mt-3 bg-gray-50 border border-gray-300 text-gray-950 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-slate-800 dark:border-slate-700 dark:placeholder-slate-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="username" />
                        </div>
                    </div>

                    <div className="mt-8">
                        <label htmlFor="password" className="text-gray-400 text-xl mb-3">password:</label>

                        <div className="relative w-full">
                            <div className="absolute inset-y-0 left-0 top-0 flex items-center pl-3 pointer-events-none">
                                <HiLockClosed className='text-xl' />
                            </div>
                            <div className="absolute inset-y-0 right-0 flex items-center px-2 justify-center">
                                <input className="hidden js-password-toggle" id="toggle" type="checkbox" onClick={() => setShowPass(!showPass)} />
                                <label className="px-3 py-3 text-xl text-gray-200 font-mono cursor-pointer js-password-label" for="toggle">{showPass ? <HiEye /> : <HiEyeOff />}</label>
                            </div>
                            <input type={showPass ? "text" : "password"} id="email-address-icon" className="py-3 mt-3 bg-gray-50 border border-gray-300 text-gray-950 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-slate-800 dark:border-slate-700 dark:placeholder-slate-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="password" />

                        </div>
                    </div>
                    <button type="submit" className='w-full px-4 py-3 mt-10 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm  text-center mr-2 mb-2 '>Login</button> </form>
                <p className="text-md text-gray-300">Don't have an socio account? <Link href={"/signup"} className="text-blue-500 underline">Signup Now!</Link></p>
            </div>
            <div className="flex-1 bg-slate-800 text-center hidden lg:flex h-screen">
                <img src="login_img.png" alt="Login Png" />
            </div>

        </div>
    )

}

