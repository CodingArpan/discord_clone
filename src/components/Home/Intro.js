import React from 'react'
import Navbar from '../common/Navbar'

export default function Intro() {
    return (<div className="bg-[#404eed] h-max">
        <Navbar />

        <div className='h-full grid grid-rows-1 grid-cols-3 justify-center items-center'>

            <div style={{ backgroundImage: `url('/assets/center_bg_landing_header.svg')` }} className=" m-auto w-full max-w-[2560px] h-full bg-no-repeat bg-center bg-cover order-1 row-start-1 row-end-2 col-start-1 col-end-4" ></div>

            <div className="cartooncontainer relative m-auto w-full  h-full row-start-1 row-end-2  col-start-1 col-end-4 order-3 flex flex-row justify-between items-end -left-10 ">

                <div className="leftcartoon w-full max-w-[700px] h-[320px] bg-no-repeat bg-center bg-contain " style={{ backgroundImage: `url('/assets/left_bg_landing_header.svg')` }} >
                </div>

                <div className="rightcartoon w-full max-w-[700px] h-[320px] bg-no-repeat bg-center bg-contain" style={{ backgroundImage: `url('/assets/right_bg_landing_header.svg')` }} >
                </div>

            </div>

            <div className="introcontent order-4 row-start-1 row-end-2 col-start-1 col-end-4 relative top-0 z-10 m-auto w-full max-w-[780px] flex flex-col justify-between items-center text-white py-[120px] space-y-10">
                <span className="title uppercase text-6xl font-black ">Imagine a place...</span>
                <p className="subtitle text-lg text-center">...where you can belong to a school club, a gaming group, or a worldwide art community. Where just you and a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often.</p>
                <div className="btncontainers w-full flex flex-row justify-center items-center space-x-10">
                    <div className="download px-8 py-4 bg-white rounded-full text-black text-lg cursor-pointer">
                        <span className="icon">📩</span>
                        <span className="txt capitalize">download for windows</span>
                    </div>
                    <div className="openinbrowser px-8 py-4 bg-[#2a2c31] rounded-full text-lg cursor-pointer">

                        <span className="txt capitalize">open discord in your browser</span>
                    </div>
                </div>

            </div>

        </div>
    </div>
    )
}
