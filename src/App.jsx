import { Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home'
import Hiw from './components/pages/How-it-Works'
import Teams from './components/pages/Teams'

import Login from './components/Login/Login'

import Founders from './components/pages/Founders'
import Builders from './components/pages/Builders'
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
     <Route path="how-it-works" element={<Hiw />} />
     <Route path="teams" element={<Teams />} />
     <Route path="login" element={<Login/>}/>
     <Route path="unabyss-for-founders" element={<Founders />} />
     <Route path="unabyss-for-builders" element={<Builders />} />


    </Routes>
  )
}