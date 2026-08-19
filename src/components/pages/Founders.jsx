import AIThatKnowsCompany from '../Founders/AiThatKnowsCompany'
import FoundersPain from '../Founders/FoundersPain'
import UseAgentsLikeNeverBefore from '../Founders/UseAgentsLikeNeverBefore'
import Navbar from '../Navbar'
import Setituponce from '../Founders/SetitUpOnce'
import HowFoundersWork from '../Founders/HowYouWork'
import ContextOwnership from '../Teams/ContextOwnership'
import CompareLinks from '../how-it-works/CompareLinks'
import Foundercta from '../Founders/Foundercta'
import Footer from '../how-it-works/Footer'
export default function Founders() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
       <AIThatKnowsCompany/>
    <FoundersPain/>
    <UseAgentsLikeNeverBefore/>
   <Setituponce/>
   <HowFoundersWork/>
   <ContextOwnership/>
   <CompareLinks/>      
   <Foundercta/>
   <Footer/>
      </main>
    </div>
  )
}