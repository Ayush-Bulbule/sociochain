import { useState } from 'react'
import { HiOutlineCheck } from 'react-icons/hi'
import { contractAddress } from '../../backend/config'
import abi from '../../backend/artifacts/contracts/Socialchain.sol/Socialchain.json'
import { useEffect } from 'react'
import Web3Modal from 'web3modal'
import { ethers } from 'ethers'
import { useStorageUpload } from "@thirdweb-dev/react"
import * as IPFS from 'ipfs-core'
import axios from 'axios'





export default function NewPost() {
    const [message, setMessage] = useState("");
    const [imgurl, setImgurl] = useState("")
    const [userName, setUserName] = useState("uesrName");
    const [password, setPassword] = useState("pass");
    const { mutateAsync: upload } = useStorageUpload();
    const [fileUrl, setFileUrl] = useState("")


    async function uploadToIPFS(e) {
        e.preventDefault();
        try {
            const imageURI = await upload({
                data: [imgurl],
                options: { uploadWithGatewayUrl: true, uploadWithoutDirectory: true },
            });

            console.log(imageURI[0]);
            const uploadData = await upload({
                data: [{
                    url: imageURI[0],
                    content: message,
                    username: userName
                }],
                options: { uploadWithGatewayUrl: true, uploadWithoutDirectory: true },
            })

            axios.get(uploadData[0])
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                })
            return uploadData[0]

        } catch (e) {
            console.log(e);
        }
    };





    return (
        <form onSubmit={uploadToIPFS} className="fixed right-3 lg:w-[32%]  box-border my-3 bg-white p-4 rounded-lg shadow dark:bg-gray-900 ">
            <div className="avatar flex items-center py-4 mx-3 w-full">
                <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" className="w-10 h-10 " />
                <h6 className="text-sm px-3 font-semibold tracking-tight text-gray-950 dark:text-white">
                    Durvesh Chopade
                </h6>
            </div>

            <textarea value={message} onChange={(e) => setMessage(e.target.value)} type="text" name="message" rows='8' className=' px-2 py-3 w-full font-light text-xl bg-transparent outline-none border-none placeholder:text-gray-600 focus:ring-0 focus:outline-none focus:border-none active:outline-none' placeholder='New Post Text....' ></textarea>
            <div className="flex py-2">
                <input type="file" onChange={e => setImgurl(e.target.files[0])} id="default-search" className="block w-full px-4 py-2 mr-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter url...." required />
                <button type="submit" className="text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 flex items-center justify-center">Post</button>
            </div>
        </form>
    )
}