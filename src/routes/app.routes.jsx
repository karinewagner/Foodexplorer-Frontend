import { Routes, Route } from 'react-router-dom'

import { Home } from '../pages/Home'
import { Profile } from '../pages/Profile'
import { Details } from '../pages/Details'
import { Requests } from '../pages/Requests'
import { Payment } from '../pages/Payment'
import { NewDish } from '../pages/NewDish' // TEMPORÁRIO - DEIXAR SOMENTE NA ROTA ADM.ROUTES

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/details/:id" element={<Details />} />
      <Route path="/requests/:id" element={<Requests />} />
      <Route path="/payment/:id" element={<Payment />} />
      <Route path="/newdish" element={<NewDish />} /> {/* TEMPORÁRIO - DEIXAR SOMENTE NA ROTA ADM.ROUTES*/}
    </Routes>
  )
}