import Link from 'next/link';
import { useState } from 'react'
import { GoSignIn } from 'react-icons/Go'
import { HiEye, HiEyeOff } from 'react-icons/hi'

export default function Login() {

    const [showPass, setShowPass] = useState(false);
    return (

        <div className="font-Outfit m-0 bg-gray-900 shadow flex justify-center flex-1 h-screen">


            <div className="lg:w-1/2 xl:w-5/12 flex flex-col items-center justify-center p-6 sm:p-12">
            <img src="logo.png" className="h-12 mr-3" alt="Flowbite Logo" />
                <span className={`  mt-3 self-center text-3xl font-semibold whitespace-nowrap dark:text-white text-white `}>SignUp to Sociochain</span>
                
                <p className="text-md text-gray-300">Already have an Account? <Link href={"/login"} className="text-blue-500 underline">Login Now!</Link></p>
            </div>
            <div className="flex-1 bg-slate-800 text-center hidden lg:flex h-screen">
                <img src="login_img.png" alt="Login Png" />
            </div>

        </div>
    )

}