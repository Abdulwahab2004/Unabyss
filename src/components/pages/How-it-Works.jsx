import Navbar from '../Navbar'

import HIWHero from '../how-it-works/how-hero'
import SetupSteps from '../how-it-works/Setup-steps'
import VideoWalkthrough from '../how-it-works/video-walkthrough'
import Mechanics from '../how-it-works/Mechanics'
 import SyncSection from '../how-it-works/SyncSection'
// import StaySection from '../how-it-works/StaySection'
import CompareLinks from '../how-it-works/CompareLinks'
import FinalCTA from '../how-it-works/FinalCTA'
 import Footer from '../how-it-works/Footer'

export default function HowItWorks() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HIWHero />
        <SetupSteps />
   <VideoWalkthrough />
          <Mechanics />
            <SyncSection />
       {/* <StaySection /> */}
        <CompareLinks />
        <FinalCTA />  

      </main>
       <Footer /> 
    </div>
  )
}