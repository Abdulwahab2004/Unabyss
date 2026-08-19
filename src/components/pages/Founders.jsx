import AIThatKnowsCompany from '../Founders/AiThatKnowsCompany'
import FoundersPain from '../Founders/FoundersPain'
import Navbar from '../Navbar'


export default function Founders() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
       <AIThatKnowsCompany/>
    <FoundersPain/>
      </main>
    </div>
  )
}