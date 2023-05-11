import { useState } from 'react'
import { HiOutlineHeart, HiOutlineRefresh, HiOutlineShare,HiHeart} from 'react-icons/hi'
import {HiOutlineFlag, HiFlag} from 'react-icons/hi2'

export default function PostCard() {

    const [like, setLike] = useState()  // Like
    const [flag, setFlag] = useState()  // Flag

    return (

        <div className="avatar  space-y-6 items-start m-3">
            <div className=" w-full flex my-2 flex-row bg-white p-4 border-gray-200 rounded-lg shadow dark:bg-gray-900 dark:border-slate-700">
                <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" className="w-8 h-8 sm:w-10 sm:h-10" />
                <div className="flex flex-col pl-2 sm:pl-4 pr-2">
                    <div className="avatar flex items-center">
                        <h6 className="text-sm font-semibold tracking-tight text-gray-950 dark:text-white">
                            Durvesh Chopade
                        </h6>
                    </div>
                    <p className="mb-3 font-normal text-gray-500 dark:text-gray-400 text-sm text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, est dolores. Veritatis distinctio facere delectus, voluptate laudantium velit impedit ut eum reprehenderit dolore iusto illum maxime assumenda amet voluptas porro.</p>
                    <img src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80" className='rounded-lg my-2 ' alt="" />
                    <div className="flex flex-row text-lg">

                        <div className="action hover:text-rose-400 md:px-3 flex cursor-pointer " onClick={() => setLike(!like)} >
                            {!like ? <HiOutlineHeart /> : <HiHeart className='text-red-600 scale-125 duration-1000' />}
                            <p className="text-sm px-2 ">Like</p>
                        </div>
                        <div className="action md:px-3 text-gray-300 hover:text-green-400 flex cursor-pointer">
                            <HiOutlineRefresh />
                            <p className="text-sm px-2">ReShare</p>
                        </div>
                        <div className="action md:px-3 text-gray-300 hover:text-cyan-400 flex cursor-pointer">
                            <HiOutlineShare />
                            <p className="text-sm px-2">Share</p>
                        </div>
                        <div className="action md:px-3 text-gray-300 hover:text-yellow-200 flex cursor-pointer" onClick={() => setFlag(!flag)}>

                            {!flag ? <HiOutlineFlag /> : <HiFlag className='text-yellow-200 scale-110' />}

                            <p className="text-sm px-2">Flag</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}