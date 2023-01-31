import { Container, Logo } from './styles'

import { FiLogOut, FiSearch, FiFileText} from 'react-icons/fi'
import { BsHexagonFill } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import { useContext, useState, useEffect } from 'react'

import { Input } from '../Input'
import { ButtonText } from '../ButtonText'
import { Button } from '../Button'

import { useAuth } from '../../hooks/auth'
import { DishContext } from '../../hooks/dish'

export function Header() {
  const [search, setSearch] = useState("")
  const { fetchDishes } = useContext(DishContext)
  
  const { signOut, user } = useAuth()
  const navigation = useNavigate()

  useEffect(() => {
    fetchDishes(search)
  }, [search])

  function handleSignOut() {
    navigation('/')
    signOut()
  }

  function handleNewDish() {
    navigation('/newdish')
  }

  return (
    <Container>
        <Logo to="/profile">
          <BsHexagonFill/>
          <h1>Food Explorer</h1>
        </Logo>

        {
          user.is_admin === 0 ? 
          (
            <>
              <h2>Meus favoritos</h2>
            </>
          ) : 
          (
            <h2>Administrador</h2>      
          )
        }

        <Input
          icon={FiSearch}
          placeholder="Busque pelas opções de pratos"
          type="text"
          onChange={e => setSearch(e.target.value)}
        />

        {
          user.is_admin === 0 ? 
          (
            <>
              <Button 
                className="btnRequest"
                icon={FiFileText}
                title="Meu pedido"          
              />
            </>
          ) : 
          (
            <Button 
              className="btnRequest"
              icon={FiFileText}
              title="Meu pedido"
              onClick={handleNewDish}        
            />      
          )
        }

        <ButtonText
          icon={FiLogOut}
          onClick={handleSignOut}
        />

    </Container>
  )
}