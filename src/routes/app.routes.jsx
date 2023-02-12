import { Routes, Route } from 'react-router-dom'

import { useAuth } from "../hooks/auth"
import { DishesProvider } from '../hooks/dish'

import { Home } from '../pages/Home'
import { Profile } from '../pages/Profile'
import { Details } from '../pages/Details'
import { Requests } from '../pages/Requests'
import { Payment } from '../pages/Payment'
import { NewDish } from '../pages/NewDish'
import { EditDish } from '../pages/EditDish'

export function AppRoutes() {
  const { user } = useAuth()

  return(
    <DishesProvider>
      <Routes>
          <Route path="/" element={<Home />}/>
            { 
              user.is_admin === 0 ? 
                (
                  <>
                  <Route path="/" element={<Home />}/>
                  </>
                ) : 
                  <>
                  <Route path="/editdish/:id" element={<EditDish />}/>
                  <Route path="/newdish" element={<NewDish />}/>
                </>
            }
          <Route path="/details/:id" element={<Details />}/>
          <Route path="/payment/:id" element={<Payment />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/requests" element={<Requests />} />
      </Routes>
    </DishesProvider>
  )
}
