import Navbar from '../Navbar'
import Hero from '../Hero'
import UseCaseShowcase from '../Home/UseCaseShowcase'
import ConnectClaude from '../Home/ConnectClaude'
import TwoGaps from '../Home/Twogaps'
import DontAnswerJustWork from '../Home/DontAnswerJustWork'
import ConnectOnce from '../Home/ConnectOnce'
import WhyUnabyss from '../Home/WhyUnabyss'
import BuiltForHowYouWork from '../Home/BuiltforHowYouWork'
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
        <ConnectOnce/>
        <WhyUnabyss/>
        <BuiltForHowYouWork/>
      </main>
    </div>
  )
}