import React from 'react'

export default function HomeSection1() {
  return (
    <div className="w-full h-screen flex ">
      <div className="container mx-auto flex flex-row justify-evenly items-center">
        <div className="media w-[678px] h-[440px] bg-no-repeat bg-contain bg-center" style={{ backgroundImage: "url('/assets/invite_only_landing.svg')" }}>

        </div>
        <div className="letter w-[380px]">
          <h3 className="heading font-bold text-5xl leading-[60px]">
            Create an <br />invite-only <br />place where you<br /> belong
          </h3>
          <p className="descrp my-10 ">Discord servers are organized into topic-based channels where you can collaborate, share, and just talk about your day without clogging up a group chat.</p>
        </div>
      </div>
    </div>
  )
}
