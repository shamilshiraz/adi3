import React from 'react'
import Hero from '../components/HeroSect'
import WhyChooseAdhi from '../components/WhyChooseAdhi'
import Clients from '../components/Clients'
import InvestmentOpportunities from '../components/InvestmentOpp'
import InvestmentAdvisors from '../components/InvestmentAdvisor'
import InvestorJourney from '../components/InvestorJourney'
import RoadshowsEvents from '../components/RoadshowEvents'
import WhyChooseAdhiWhite from '../components/WhyChooseAdiW'

function Landing() {
  return (
    <div>
        <Hero/>
        <Clients/>
        <WhyChooseAdhi/>
        <WhyChooseAdhiWhite/>
        <InvestmentOpportunities/>
        <InvestmentAdvisors/>
        <InvestorJourney/>
        <RoadshowsEvents/>
    </div>
  )
}

export default Landing