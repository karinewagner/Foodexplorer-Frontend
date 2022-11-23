import { Routes, Route } from 'react-router-dom'

import { NewDish } from '../pages/NewDish'
//import { Profile } from '../pages/Profile'


export function AdmRoutes() {
  return (
    <Routes>
      <Route path="/newdish" element={<NewDish />} />
      {/*<Route path="/profile" element={<Profile />} />*/}
    </Routes>
  )
}