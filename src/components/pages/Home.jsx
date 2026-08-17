import Navbar from '../Navbar'
import Hero from '../Hero'
import UseCaseShowcase from '../Home/UseCaseShowcase'
import ConnectClaude from '../Home/ConnectClaude'
import TwoGaps from '../Home/Twogaps'
import DontAnswerJustWork from '../Home/DontAnswerJustWork'
export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <UseCaseShowcase/>
        <ConnectClaude/>
        <TwoGaps/>
        <DontAnswerJustWork/>
      </main>
    </div>
  )
}