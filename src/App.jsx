import { Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home'
import Hiw from './components/pages/How-it-Works'
import Teams from './components/pages/Teams'
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
     <Route path="how-it-works" element={<Hiw />} />
     <Route path="teams" element={<Teams />} />
    </Routes>
  )
}