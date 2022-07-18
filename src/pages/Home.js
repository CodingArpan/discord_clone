import React from 'react'
import Footer from '../components/common/Footer'
import HomeSection1 from '../components/Home/HomeSection1'
import HomeSection2 from '../components/Home/HomeSection2'
import HomeSection3 from '../components/Home/HomeSection3'
import HomeSection4 from '../components/Home/HomeSection4'
import Intro from '../components/Home/Intro'


export default function Home() {
  return (
    <>
      <Intro />
      <HomeSection1 />
      <HomeSection2/>
      <HomeSection3/>
      <HomeSection4/>
      <Footer/>
    </>
  )
}
