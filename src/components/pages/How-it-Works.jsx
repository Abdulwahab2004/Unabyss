import Navbar from '../Navbar'

import HIWHero from '../how-it-works/how-hero'
import SetupSteps from '../how-it-works/Setup-steps'
import VideoWalkthrough from '../how-it-works/video-walkthrough'
// import Mechanics from '../components/how-it-works/Mechanics'
// import SyncSection from '../components/how-it-works/SyncSection'
// import StaySection from '../components/how-it-works/StaySection'
// import CompareLinks from '../components/how-it-works/CompareLinks'
// import FinalCTA from '../components/how-it-works/FinalCTA'
// import Footer from '../components/Footer'

export default function HowItWorks() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HIWHero />
        <SetupSteps />
   <VideoWalkthrough />
            {/*  <Mechanics />
        <SyncSection />
        <StaySection />
        <CompareLinks />
        <FinalCTA />  */}
      </main>
      {/* <Footer /> */}
    </div>
  )
}