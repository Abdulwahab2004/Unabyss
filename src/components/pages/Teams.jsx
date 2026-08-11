import Navbar from '../Navbar'
import TeamsHero from '../Teams/TeamsHero'
import OrgChart from '../Teams/OrgChart'
// import WhereTeamsFeelIt from '../components/teams/WhereTeamsFeelIt'
// import Permissions from '../components/teams/Permissions'
// import MaxPlanSeat from '../components/teams/MaxPlanSeat'

export default function Teams() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <TeamsHero />
        <OrgChart />
         {/*<WhereTeamsFeelIt />
        <Permissions />
        <MaxPlanSeat /> */}
      </main>
    </div>
  )
}