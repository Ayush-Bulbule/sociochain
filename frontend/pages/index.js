import Head from 'next/head'
import PostCard from '../components/PostCard1'
import Navbar from '@/components/Navbar'
import Advertise from '@/components/Advertise'


export default function Home() {
  return (
    <>
      <Head>
        <title>Socio-Chain</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="./logo.png" />
      </Head>
      <main>
        <button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
          <span className="sr-only">Open sidebar</span>
          <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
          </svg>
        </button>

        <div className='w-full'>

          <Navbar />
        </div>
        <div className="p-4 sm:ml-64">
          {/* NavBar */}




          {/* Body */}
          <div className="pt-20 -dashed rounded-lg">
            <div className="grid grid-cols-3 gap-4 mb-4">
              <div className='col-span-2'>
                <PostCard />
              </div>

              <Advertise />

            </div>


          </div>
        </div>

      </main>
    </>
  )
}
