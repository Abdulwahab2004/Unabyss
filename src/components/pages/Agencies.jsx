import UseCases from '../Agencies/AgenciesUseCases'
import Navbar from '../Navbar'
import Footer from '../how-it-works/Footer'
import AgenciesPain from '../Agencies/AgenciesPain'
import AgenciesMomentToMoment from '../Agencies/AgenciesMomentToMoment'
import AbetterVersion from '../Agencies/AbetterVersion'
import AgenciesWork from '../Agencies/HowAgenciesWork'
import AgenciesContext from '../Agencies/AgenciesContext'
import CompareLinks from '../how-it-works/CompareLinks'
import AgenciesCTA from '../Agencies/AgenciesCTA'
export default function Agencies ()  {
  return (
     <div className="min-h-screen">
          <Navbar />
          <main>
           <UseCases/>
          <AgenciesPain/>
      <AgenciesMomentToMoment/>
      <AbetterVersion/>
      <AgenciesWork/>
      <AgenciesContext/>
      <CompareLinks/>
      <AgenciesCTA/>
          <Footer/>
          </main>
        </div>
  )
}

