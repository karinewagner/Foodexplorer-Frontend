import { Routes, Route } from 'react-router-dom'

import { useAuth } from "../hooks/auth";
import { DishesProvider } from '../hooks/dish'

import { Home } from '../pages/Home'
import { Profile } from '../pages/Profile'
import { Details } from '../pages/Details'
import { Requests } from '../pages/Requests' // fazer a tela mudar quando for adm
import { Payment } from '../pages/Payment'
import { NewDish } from '../pages/NewDish'

export function AppRoutes() {
    const { user } = useAuth();

    return(
      <DishesProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/requests/:id" element={<Requests />} />
          <Route path="/payment/:id" element={<Payment />} />
          <Route path="/newdish" element={<NewDish />} />
        </Routes>
      </DishesProvider>
    );
  }
  
  //{ user.admin === 1 ? <Route path="/details/:id" element={<NewDish />} /> : <Route path="/details/:id" element={<Details />} />}