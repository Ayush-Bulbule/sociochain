import Link from 'next/link';
import { useState } from 'react'
import { GoSignIn } from 'react-icons/Go'
import { HiEye, HiEyeOff } from 'react-icons/hi'

export default function Login() {

    const [showPass, setShowPass] = useState(false);
    return (

        <div className="font-Outfit m-0 bg-slate-900 shadow flex justify-center flex-1 h-screen">


            <div className="lg:w-1/2 xl:w-5/12 flex flex-col items-center justify-center p-6 sm:p-12">
                <h2 className='text-white font-medium text-center text-2xl text-2 '>SignUp to Sociochain</h2>
                <form action="" className="wrapper p-16 w-full">
                    <div className="mt-8">
                        <label htmlFor="username" className="text-gray-400 text-xl mb-3">username:</label>
                        <input type="text" hint="username" className='px-4 py-3 mt-4 font text-xl bg-slate-800 border-2 rounded-md outline-none text-white border-slate-600 w-full focus:border-blue-400' />
                    </div>
                    <div className="mt-8">
                        <label htmlFor="username" className="text-gray-400 text-xl mb-3">email:</label>
                        <input type="text" hint="username" className='px-4 py-3 mt-4 font text-xl bg-slate-800 border-2 rounded-md outline-none text-white border-slate-600 w-full focus:border-blue-400' />
                    </div>

                    <div className="mt-8">
                        <label htmlFor="username" className="text-gray-400 text-xl mb-3">password:</label>
                        <div class="relative w-full">
                            <div class="absolute inset-y-0 right-0 flex items-center px-2 mt-4 justify-center">
                                <input class="hidden js-password-toggle" id="toggle" type="checkbox" onClick={() => setShowPass(!showPass)} />
                                <label class="px-3 py-3 text-2xl text-gray-200 font-mono cursor-pointer js-password-label" for="toggle">{showPass ? <HiEye /> : <HiEyeOff />}</label>
                            </div>
                            <input class="px-4 py-3 mt-4 font text-xl bg-slate-800 border-2 rounded-md outline-none text-white border-slate-600 w-full focus:border-blue-400" id="password" type={showPass ? "text" : "password"} autocomplete="off"
                            />
                        </div>
                    </div>
                    <button type="submit" className='px-4 py-3 mt-16 font text-xl bg-blue-700 rounded-md outline-none text-white border-slate-600 w-full'>Login</button>
                </form>
                <p className="text-md text-gray-300">Already have an Account? <Link href={"/signup"} className="text-blue-500 underline">Login Now!</Link></p>
            </div>
            <div className="flex-1 bg-slate-800 text-center hidden lg:flex h-screen">
                <img src="login_img.png" alt="Login Png" />
            </div>

        </div>
    )

}