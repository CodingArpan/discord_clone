import React from 'react'

export default function HomeSection2() {
    return (
        <div className="w-full h-screen flex bg-[#f6f6f6]">
            <div className="container mx-auto flex flex-row justify-evenly items-center">
                <div className="letter w-[380px]">
                    <h3 className="heading font-bold text-5xl leading-[60px]">
                    Where hanging out is easy
                    </h3>
                    <p className="descrp my-10 ">Grab a seat in a voice channel when you’re free. Friends in your server can see you’re around and instantly pop in to talk without having to call.</p>
                </div>
                
                <div className="media w-[678px] h-[440px] bg-no-repeat bg-contain bg-center" style={{ backgroundImage: "url('/assets/hanging_out_easy_landing.svg')" }}>

                </div>

            </div>
        </div>
    )
}
