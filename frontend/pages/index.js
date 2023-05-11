import Head from 'next/head'
import PostCard from '@/components/PostCard'
import Navbar from '@/components/Navbar'
// import Advertise from '@/components/Advertise'
import { FiSend } from 'react-icons/fi'

import NewPost from '@/components/NewPost'
import { contractAddress } from '../../backend/config'
import abi from '../../backend/artifacts/contracts/Socialchain.sol/Socialchain.json'
import { useEffect, useState } from 'react'
import Web3Modal from 'web3modal'
import { ethers } from 'ethers'



export default function Home() {

  const [messages, setMessages] = useState([]);


  useEffect(() => {
    console.log(contractAddress)
  }, [])

  async function getMessages() {
    try {
      const web3Modal = new Web3Modal()
      const connection = await web3Modal.connect()
      const provider = new ethers.providers.Web3Provider(connection)
      const signer = provider.getSigner()
      const contract = new ethers.Contract(
        contractAddress,
        abi.abi,
        signer
      )

      const msgList = await contract.getPost()
      let messagesClean = [];
      msgList.forEach((message) => {
        messagesClean.push({
          id: message.id.toString(),
          content: message.content,
          likes: message.likes.toNumber(),
          dislikes: message.dislikes.toNumber(),
          imageurl: message.image,
          username: message.account.username,
        })
      })

      setMessages(messagesClean);
      console.log(messagesClean);
    } catch (e) {
      console.log(e);
    }

  }

  async function likeMsg(id) {
    try {
      const web3Modal = new Web3Modal()
      const connection = await web3Modal.connect()
      const provider = new ethers.providers.Web3Provider(connection)
      const signer = provider.getSigner()
      const contract = new ethers.Contract(
        contractAddress,
        abi.abi,
        signer
      )
      await contract.likePost(id);
    } catch (e) {
      console.log(e);
    }
  }

  async function flagMessage() {
    try {
      const web3Modal = new Web3Modal()
      const connection = await web3Modal.connect()
      const provider = new ethers.providers.Web3Provider(connection)
      const signer = provider.getSigner()
      const contract = new ethers.Contract(
        contractAddress,
        abi.abi,
        signer
      )
      await contract.disLikePost(id);
    } catch (e) {
      console.log(e);
    }

  }

  useEffect(() => {
    getMessages()
  }, [])


  return (
    <>
      <Head>
        <title>sociochain </title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="./logo.png" />
      </Head>
      <main>
        {/* NavBar */}
        <div className='w-full '>
          <Navbar />
        </div>
        <div className="p-4 lg:ml-64 dark:bg-gray-950 h-screen">
          {/* Body */}
          <div className="pt-20 bg-rounded-lg ">
            <div className="sm:grid lg:grid-cols-5 gap-4 mb-4">
              <div className='col-span-4 sm:col-span-3 '>
                {messages.map((message, i) => {
                  return (
                    <div key={i}>
                      <PostCard
                        msg={message.content}
                        imageurl={message.imageurl}
                        likes={message.likes}
                        flag={message.dislikes}
                        username={message.username}
                        likeMsg={() => likeMsg(i)}
                        flagMessage={()=>flagMessage(i)}
                      />
                    </div>
                  )
                })
                }
              </div>
              <div className="fixed  hidden  lg:block xl:col-span-2 pr-3">
                <NewPost />
              </div>

              <div className="z-50 block md:hidden select-none cursor-pointer fixed bottom-2 p-4 right-4 rounded-full rounded-br-full dark:bg-blue-600 ">
                <FiSend className='font-2xl' />
              </div>
              {/* <Advertise /> */}
            </div>
          </div>
        </div>
      </main >
    </>
  )
}
