import React from 'react'
// import avatar from '../assets/avatar.png'

const PostCard = () => {
  return (
    <div className="avatar flex flex-col space-y-6 items-start">
      <div className="w-full backdrop-filter backdrop-blur-lg rounded-lg p-8 bg-[#1e1f23] flex flex-row border border-gray-800">
        <div className="avatar flex items-start w-1/12  ">
          <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" className="w-10 h-10" />
        </div>
        <div className="flex flex-col w-11/12 px-4">
          <h2 className="text-md font-bold text-white">
            Ayush Bulbule
          </h2>
          <p className="text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, est dolores. Veritatis distinctio facere delectus, voluptate laudantium velit impedit ut eum reprehenderit dolore iusto illum maxime assumenda amet voluptas porro.</p>
        </div>
      </div>

      <div className="w-full backdrop-filter backdrop-blur-lg rounded-lg p-8 bg-[#1e1f23] flex flex-row border border-gray-800">
        <div className="avatar flex items-start w-1/12  ">
          <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" className="w-10 h-10" />
        </div>
        <div className="flex flex-col w-11/12 px-4">
          <h2 className="text-md font-bold text-white">
            Om Panchwate
          </h2>
          <p className="text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, est dolores. Veritatis distinctio facere delectus, voluptate laudantium velit impedit ut eum reprehenderit dolore iusto illum maxime assumenda amet voluptas porro.</p>
        </div>
      </div>
    </div>
  )
}

export default PostCard