import Banner from '@/components/Banner'
import CustomerReviews from '@/components/CustomerReviews '
import FeaturedPrompt from '@/components/FeaturedPrompt'
import HowItWorks from '@/components/HowItWorks '
import StatsSection from '@/components/StatsSection'
import TopCreators from '@/components/TopCreators '
import WhyChooseUs from '@/components/WhyChooseUs '
import React from 'react'

const Home = () => {
  return (
    <div>
      <Banner/>
      <FeaturedPrompt/>
      <WhyChooseUs/>
      <TopCreators/>
      <CustomerReviews/>
      <HowItWorks/>
      <StatsSection/>
    </div>
  )
}

export default Home