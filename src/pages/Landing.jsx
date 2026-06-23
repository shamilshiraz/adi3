import React from 'react'
import Hero from '../components/HeroSect'
import WhyChooseAdhi from '../components/WhyChooseAdhi'
import Clients from '../components/Clients'
import InvestmentOpportunities from '../components/InvestmentOpp'
import InvestmentAdvisors from '../components/InvestmentAdvisor'
import InvestorJourney from '../components/InvestorJourney'
import RoadshowsEvents from '../components/RoadshowEvents'

function Landing() {
  return (
    <div>
        <Hero/>
        <Clients/>
        <WhyChooseAdhi/>
        <InvestmentOpportunities/>
        <InvestmentAdvisors/>
        <InvestorJourney/>
        <RoadshowsEvents/>
    </div>
  )
}

export default Landing