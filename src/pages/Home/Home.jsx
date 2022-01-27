import React from 'react'
import Footer from '../../components/Footer/Footer'
import HeroSection from '../../components/HeroSection/HeroSection'
import Topbar from '../../components/Topbar/Topbar'
import Newsletter from '../../components/Newsletter/Newsletter'
import WhyUs from '../../components/WhyUs/WhyUs'
import ExclusiveDeals from '../../components/ExclusiveDeals/ExclusiveDeals'
import OnlineMenu from '../../components/OnlineMenu/OnlineMenu'

const Home = () => {
    return (
        <div className= "home">
            <Topbar/>
            <HeroSection/>
            <ExclusiveDeals/>
            <OnlineMenu/>
            <WhyUs/>
            <Newsletter/>
            <Footer/>
        </div>
    )
}

export default Home
