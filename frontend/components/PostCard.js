import { HiOutlineHeart, HiOutlineRefresh, HiOutlineShare, HiOutlineFlag } from 'react-icons/hi'


export default function PostCard({ msg, imageurl, likes, flag, username, likeMsg }) {
    return (

        <div className="avatar  space-y-6 items-start m-3">
            <div className=" w-full flex my-2 flex-row bg-white p-4 border-gray-200 rounded-lg shadow dark:bg-gray-900 dark:border-slate-700">
                <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" className="w-8 h-8 sm:w-10 sm:h-10" />
                <div className="flex flex-col pl-2 sm:pl-4 pr-2">
                    <div className="avatar flex items-center">
                        <h6 className="text-sm font-semibold tracking-tight text-gray-950 dark:text-white">
                            {username}
                        </h6>
                    </div>
                    <p className="mb-3 font-normal text-gray-500 dark:text-gray-400 text-sm text-justify">{msg}</p>
                    <img src={imageurl} className='rounded-lg my-2 ' alt="" />
                    <div className="flex flex-row">
                        <div className="action hover:text-rose-400 md:px-3 flex cursor-pointer">
                            <HiOutlineHeart />
                            <p onClick={likeMsg} className="text-xs px-2 ">Like {likes}</p>
                        </div>
                        <div className="action md:px-3 text-gray-300 hover:text-green-400 flex cursor-pointer">
                            <HiOutlineRefresh />
                            <p className="text-xs px-2">ReShare</p>
                        </div>
                        <div className="action md:px-3 text-gray-300 hover:text-cyan-400 flex cursor-pointer">
                            <HiOutlineShare />
                            <p className="text-xs px-2">Share</p>
                        </div>
                        <div className="action md:px-3 text-gray-300 hover:text-yellow-200 flex cursor-pointer">
                            <HiOutlineFlag />
                            <p className="text-xs px-2">Flag {flag}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}