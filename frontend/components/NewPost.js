import { HiOutlineHeart, HiOutlineRefresh, HiOutlineShare } from 'react-icons/hi'


export default function NewPost() {
    return (
        <div className="fixed right-3 lg:w-[32%]  box-border my-3 bg-white p-4 rounded-lg shadow dark:bg-gray-900 ">
            <div className="avatar flex items-center py-4 mx-3 w-full">
                <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" className="w-10 h-10 " />
                <h6 className="text-sm px-3 font-semibold tracking-tight text-gray-950 dark:text-white">
                    Durvesh Chopade
                </h6>
            </div>
            <textarea type="text" rows='8' className=' px-2 py-3 w-full font-light text-xl bg-transparent outline-none border-none placeholder:text-gray-600 focus:ring-0 focus:outline-none focus:border-none active:outline-none' placeholder='New Post Text....' ></textarea>


        </div>
    )
}