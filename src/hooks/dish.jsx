import { createContext, useContext, useState } from 'react'

import { api } from '../services/api'

export const DishContext = createContext({})

function DishesProvider({ children }) {
  const [dishes, setDishes] = useState([])

  async function fetchDishes(search) {
    const response = await api.get(`/dishes?title=${search}`)
    setDishes(response.data)
  }

  return (
    <DishContext.Provider value={{ 
      dishes,
      fetchDishes,
    }}>
      { children }
    </DishContext.Provider>
  )
}

function useDishes() {
  const context = useContext(DishContext)

  return context
}

export { DishesProvider, useDishes }