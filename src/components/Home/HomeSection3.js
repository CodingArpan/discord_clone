import React from 'react'

export default function HomeSection3() {
    return (
        <div className="w-full h-screen flex ">
            <div className="container mx-auto flex flex-row justify-evenly items-center">
                <div className="media w-[678px] h-[440px] bg-no-repeat bg-contain bg-center" style={{ backgroundImage: "url('/assets/fandom_landing.svg')" }}>
                </div>
                <div className="letter w-[380px]">
                    <h3 className="heading font-bold text-5xl leading-[60px]">
                    From few to a fandom
                    </h3>
                    <p className="descrp my-10 ">Get any community running with moderation tools and custom member access. Give members special powers, set up private channels, and more.</p>
                </div>
            </div>
        </div>
    )
}
