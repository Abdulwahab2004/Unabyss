
import Navbar from '../Navbar'
import Footer from '../how-it-works/Footer'
import GTMUseCase from '../GTM/GTMUseCase'
import GTMPain from '../GTM/GTMPain'
import GTMMomentToMoment from '../GTM/GTMMomentToMoment'
import GTMContext from '../GTM/GTMContext'
import OneContext from '../GTM/OneContext'
import HowGTMWorks from '../GTM/HowGTMWork'
import CompareLinks from '../how-it-works/CompareLinks'
import GTMCta from '../GTM/GTMCta'
export default function Agencies ()  {
  return (
     <div className="min-h-screen">
          <Navbar />
          <main>
         <GTMUseCase/>
         <GTMPain/>
         <GTMMomentToMoment/>
         <OneContext/>
<HowGTMWorks/>
         <GTMContext/>
         <CompareLinks/>
         <GTMCta/>
          <Footer/>

          </main>
        </div>
  )
}

