import Head from 'next/head'
import PostCard from '../components/PostCard'
// import Advertise from '@/components/Advertise'
import { FiSend } from 'react-icons/fi'
import NewAdvertise from '../components/newAdvertise'
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
            <div className="pt-20 bg-rounded-lg ">
                <div className="sm:grid lg:grid-cols-5 gap-4 mb-4">
                    <div className='col-span-4 sm:col-span-3 '>
                        {/* {messages.map((message, i) => { */}
                            {/* return ( */}
                                <div>
                                    <PostCard
                                        // msg={message.content}
                                        // imageurl={message.imageurl}
                                        // likes={message.likes}
                                        // flag={message.dislikes}
                                        // username={message.username}
                                        // likeMsg={() => likeMsg(i)}
                                    />
                                </div>
                            {/* ) */}
                    
                        {/* } */}
                        <PostCard />
                    </div>
                    <div className="fixed  hidden  lg:block xl:col-span-2 pr-3">
                        <NewAdvertise/>
                    </div>

                    <div className="z-50 block md:hidden select-none cursor-pointer fixed bottom-2 p-4 right-4 rounded-full rounded-br-full dark:bg-blue-600 ">
                        <FiSend className='font-2xl' />
                    </div>
                    {/* <Advertise /> */}
                </div>
            </div>

        </AdLayout >
    </>

}