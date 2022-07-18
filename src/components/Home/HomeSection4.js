import React from 'react'

export default function HomeSection4() {
    return (
        <><div className='bg-[#f6f6f6] py-10 pt-32'>
            <div className="letter flex flex-col justify-center items-center">
                <h3 className="heqading text-center font-black text-5xl capitalize">Reliable tech for staying close</h3>
                <p className="descrp text-center mt-10 w-full max-w-[980px] text-xl">Low-latency voice and video feels like you’re in the same room. Wave hello over video, watch friends stream their games, or gather up and have a drawing session with screen share.</p>
                <div className="media w-[1180px] h-[715px] bg-no-repeat bg-contain bg-center" style={{ backgroundImage: "url('/assets/just_chiling_landing.svg')" }}>
                </div>
            </div>
            <div className="flex justify-center items-center h-[calc(100vh/2)]">

                <div className="ready flex flex-col justify-center items-center">
                    <div className="media w-[531px] h-[50px]  bg-no-repeat bg-contain bg-center" style={{ backgroundImage: "url('/assets/tiny_stars_landing.svg')" }}>
                    </div>
                    <h3 className=' text-center font-bold text-3xl capitalize'>Ready to start your journey?</h3>
                    <div className="button text-xl text-white m-5 px-10 py-3 rounded-full bg-[#5865f2] hover:bg-[#7983f5] cursor-pointer"><span></span>Download for Windows</div>
                </div>

            </div>
            </div>
        </>
    )
}
