import UseCases from '../Builders/UseCases'
import Navbar from '../Navbar'
import BuildersPain from '../Builders/BuildersPain'
import MomentToMoment from '../Builders/MomentToMoment'
import ReplaceThemAll from '../Builders/ReplaceThemAll'
import HowFoundersWork from '../Builders/HowYouActuallyWork'
import Context from '../Builders/Context'
import CompareLinks from '../how-it-works/CompareLinks'
import Buildercta from '../Builders/Builderscta'
import Footer from '../how-it-works/Footer'
export default function Founders() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
       <UseCases/>
       <BuildersPain/>
       <MomentToMoment/>
       <ReplaceThemAll/>
       <HowFoundersWork/>
      <Context/>
      <CompareLinks/>
      <Buildercta/>
      <Footer/>
      </main>
    </div>
  )
}