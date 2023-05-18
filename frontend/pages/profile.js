import Layout from "@/components/Layout";

export default function Profile() {
    return (<>
        <Layout>
            <div className="container mt-24 p-5 rounded-xl w-full  dark:bg-gray-900 dark:border-slate-700  flex flex-col items-center">
                <div className="flex flex-col justify-center items-center">
                    <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" className="w-8 h-8 sm:w-28 sm:h-28" />
                    <h1 className="text-2xl mt-2">@username</h1>
                    <h1>0xA080c2F113C06d909517d2448eF5A620a16289Eb</h1>
                </div>
                <div className="mt-7 text-xl w-[40%]">
                    <div className="flex justify-between items-center text-gray-200 tracking-wide">
                        <h1>Name : Robert Downey Junior</h1>
                        <div className="flex flex-col justify-center items-center border-l pl-10">
                            <h1 className="text-2xl">50</h1>
                            <h1 className="text-md">POSTS</h1>
                        </div>
                    </div>
                </div>



            </div>


        </Layout>

        {/* POSTS HERE */}
        <div className="p-4 lg:ml-64 dark:bg-gray-950">
            <div className="container dark:bg-gray-900 dark:border-slate-700 rounded-xl p-5">
                POSTS HERE...
            </div>
        </div>


    </>
    )

}   