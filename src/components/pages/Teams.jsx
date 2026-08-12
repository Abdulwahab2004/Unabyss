import Navbar from '../Navbar'
import TeamsHero from '../Teams/TeamsHero'
import OrgChart from '../Teams/OrgChart'
import WhereTeamsFeelIt from '../Teams/WhereTeamFeelIt'
import Permissions from '../Teams/Permissions'
import MaxPlanSeat from '../Teams/MaxPlanSeat'
import AdminControls from '../Teams/AdminControls'
import Admincontrols from '../Teams/AdminControls1'
import ContextOwnership from '../Teams/ContextOwnership'
import PricingFAQ from '../Teams/Pricing'
import FinalCTA from '../Teams/FinalCTA'
import Footer from '../how-it-works/Footer'
export default function Teams() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <TeamsHero />
        <OrgChart />
        <WhereTeamsFeelIt />
       <Permissions />
         <MaxPlanSeat /> 
         <AdminControls/>
         <Admincontrols/>
         <ContextOwnership/>    
         <PricingFAQ/>
         <FinalCTA/>
         <Footer/>
      </main>
    </div>
  )
}