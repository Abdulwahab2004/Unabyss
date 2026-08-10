import Navbar from '../Navbar'
import Hero from '../Hero'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
      </main>
    </div>
  )
}