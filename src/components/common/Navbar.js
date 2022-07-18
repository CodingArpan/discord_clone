import React from 'react'

export default function Navbar() {
  return (
   <nav className='capitalize m-auto w-ful max-w-[1180px] flex flex-row justify-between items-center bg-transparent py-2'>
    <div className="discordlogo p-4 cursor-pointer text-white font-bold flex flex-row justify-center items-center space-x-3 text-xl">
        <span className="logo">
            <img src="assets/discord_mini_icon.svg" alt="discordlogo" width={35} height={35} srcset="" />
        </span>
        <span className="name">discord</span>
    </div>
    <div className="menus flex flex-row justify-evenly items-center space-x-3 text-white font-semibold">
        <div className="menu menu p-4 cursor-pointer">Download</div>
        <div className="menu menu p-4 cursor-pointer">nitro</div>
        <div className="menu menu p-4 cursor-pointer">safety</div>
        <div className="menu menu p-4 cursor-pointer">supporet</div>
        <div className="menu menu p-4 cursor-pointer">blog</div>
        <div className="menu menu p-4 cursor-pointer">carrers</div>
    </div>
    <div className="login ">
        <span className="login px-5 py-2 cursor-pointer text-black bg-white rounded-full font-medium">login</span>
    </div>

   </nav>
  )
}
