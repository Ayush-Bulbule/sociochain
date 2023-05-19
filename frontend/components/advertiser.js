import Head from 'next/head'
import PostCard from '../components/PostCard'
// import Advertise from '@/components/Advertise'
import { BiRupee } from 'react-icons/bi'
import { HiEye, HiEyeOff, HiLockClosed, HiMail, HiUser } from 'react-icons/hi'
import AdLayout from '@/components/AdLayout'

export default function Advertise() {
    return <>
        <Head>
            <title>sociochain </title>
            <meta name="description" content="Generated by create next app" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="./logo.png" />
        </Head>
        <AdLayout>
            {/* Body */}
            <div className=" mt-28 container  bg-gray-900 rounded-lg ">
                <form className="wrapper lg:px-16 py-8 space-y-7 w-full">
                    {/* title */}
                    <h4 className='textcenter text-2xl'>Add your advertizement 📢</h4>
                    {/* title */}
                    <div className="">
                        <label htmlFor="title" className="text-gray-400 text-xl mb-3">title:</label>
                        <div className="relative">
                            <input type="text" id="title" name='title' className="py-2 mt-3 bg-gray-50 border border-gray-300 text-gray-950 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-12 p-2.5  dark:bg-slate-800 dark:border-slate-700 dark:placeholder-slate-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Title" />
                        </div>
                    </div>
                    {/*  */}
                    <div className="">
                        <label htmlFor="Desc" className="text-gray-400 text-xl mb-3">Description:</label>
                        <div className="relative">
                            <input type="text" id="desc" name='desc' className="py-2 mt-3 bg-gray-50 border border-gray-300 text-gray-950 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-12 p-2.5  dark:bg-slate-800 dark:border-slate-700 dark:placeholder-slate-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="title" />
                        </div>
                    </div>
                    <div className="">
                        <label htmlFor="title" className="text-gray-400 text-xl mb-3">Media File (Image/Video):</label>
                        <div className="relative">
                            <input type="file" id="title" name='title' className="py-2 mt-3 bg-gray-50 border border-gray-300 text-gray-950 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-12 p-2.5  dark:bg-slate-800 dark:border-slate-700 dark:placeholder-slate-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="title" />
                        </div>
                    </div>



                    <button type="button" class="text-white bg-gradient-to-r flex items-center justify-center from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"><BiRupee />Pay</button>

                </form>
            </div>

        </AdLayout >
    </>

}