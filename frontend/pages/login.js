import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react'
import { HiEye, HiEyeOff, HiLockClosed, HiUser } from 'react-icons/hi'

export default function Login() {

    const router = useRouter();

    const [username, setUser] = useState("");
    const [pass, setPass] = useState("");
    const [error, setError] = useState(null);
    const [message, setMessage] = useState(null);
    const [tostDisplay, setTostDisplay] = useState("flex");

    useEffect(() => {
        setTostDisplay("flex")
    }, [message, error])


    const hideTost = () => {
        setTostDisplay("hidden")
    }

    const loginUser = async (e) => {
        e.preventDefault();
        console.log(username + "   " + pass)
        await fetch('http://localhost:5000/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify({
                username: username,
                password: pass
            })
        })
            .then(response => {
                console.log(response)
                if (response.status == 200) {
                    return response.json()
                }
                else {
                    return response.json()
                }
            })
            .then(data => {
                console.log("Data: ", data)
                localStorage.setItem('token', data.token)
                setMessage(data.message)
                if (data.token) {

                    router.push('/')
                }
                return
            })
            .catch(error => {
                console.log(error)
                setError(error)
            });
    }



    const [showPass, setShowPass] = useState(false);
    return (
        <>
            <div className="font-Outfit m-0 bg-gray-900 shadow flex justify-center flex-1 xl:h-screen pb-4">
                <div className="sm:w-3/4 lg:w-1/2 xl:w-5/12 flex flex-col items-center justify-center p-6 sm:p-12">
                    {
                        (message) ?
                            <div id="toast-danger" className={`${tostDisplay} fixed  top-0 m-3 border-2 border-blue-400 items-center w-full max-w-xs p-4 mb-4 text-gray-900 bg-white rounded-lg shadow dark:text-gray-200 dark:bg-gray-900`} role="alert">
                                <div className="ml-3 text-md font-normal">{message}</div>
                                <button type="button" onClick={hideTost} className="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" data-dismiss-target="#toast-danger" aria-label="Close">
                                    <span className="sr-only">Close</span>
                                    <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                </button>
                            </div>
                            :
                            ""
                    }

                    {
                        (error) ?
                            <div id="toast-danger" className={`${tostDisplay} fixed left-30 top-0 m-3 border-2 border-rose-400 items-center w-full max-w-xs p-4 mb-4 text-gray-900 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-900`} role="alert">
                                <div className="ml-3 text-md font-normal">{error}</div>
                                <button type="button" onClick={hideTost} className="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" data-dismiss-target="#toast-danger" aria-label="Close">
                                    <span className="sr-only">Close</span>
                                    <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                </button>
                            </div>
                            :
                            ""
                    }
                    <img src="logo.png" className="h-12 mr-3" alt="Flowbite Logo" />
                    <span className={`  mt-3 self-center text-3xl font-semibold whitespace-nowrap dark:text-white text-white `}>Login to Sociochain</span>
                    <h2 className='text-white font-medium text-center text-2xl text-2 '></h2>
                    <form className="wrapper lg:px-16 py-8 w-full">

                        {/* Username */}
                        <div className="mt-8">
                            <label htmlFor="username" className="text-gray-400 text-xl mb-3">Username:</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 top-0 flex items-center pl-3 pointer-events-none">
                                    <HiUser className='text-xl' />
                                </div>
                                <input value={username} onChange={(e) => setUser(e.target.value)} name='username' type="text" id="email-address-icon" className="py-2 mt-3 bg-gray-50 border border-gray-300 text-gray-950 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-12 p-2  dark:bg-slate-800 dark:border-slate-700 dark:placeholder-slate-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="username" />
                            </div>
                        </div>

                        <div className="mt-8">
                            <label htmlFor="password" className="text-gray-400 text-xl mb-3">Password:</label>

                            <div className="relative w-full">
                                <div className="absolute inset-y-0 left-0 top-0 flex items-center pl-3 pointer-events-none">
                                    <HiLockClosed className='text-2xl' />
                                </div>
                                <div className="absolute inset-y-0 right-0 flex items-center px-2 justify-center">
                                    <input className="hidden js-password-toggle" id="toggle" type="checkbox" onClick={() => setShowPass(!showPass)} />
                                    <label className="px-3 py-3 text-xl text-gray-200 font-mono cursor-pointer js-password-label" htmlFor="toggle">{showPass ? <HiEye /> : <HiEyeOff />}</label>
                                </div>
                                <input value={pass} onChange={(e) => setPass(e.target.value)} name='password' type={showPass ? "text" : "password"} id="email-address-icon" className="py-2 mt-3 bg-gray-50 border border-gray-300 text-gray-950 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-12 p-2  dark:bg-slate-800 dark:border-slate-700 dark:placeholder-slate-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="password" />

                            </div>
                        </div>
                        <button onClick={loginUser} type="submit" className='w-full px-4 py-3 mt-10 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm  text-center mr-2 mb-2 '>Login</button> </form>
                    <p className="text-md text-gray-300">Don't have an socio account? <Link href={"/signup"} className="text-blue-500 underline">Signup Now!</Link></p>
                </div>
                <div className="flex-1 items-center justify-center bg-slate-800 px-16  text-center hidden lg:flex h-screen">
                    <div className="w-3/4">
                        <img src="login_img.png" alt="Login Png" />

                    </div>
                </div>
            </div>
        </>
    )

}

