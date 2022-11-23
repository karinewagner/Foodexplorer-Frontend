import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { BsHexagonFill } from 'react-icons/bs'

import { useAuth } from '../../hooks/auth'

import { Container, Form } from './styles'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'

export function SignIn() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const { signIn } = useAuth()
  const navigate = useNavigate()

  function handleSignIn() {
    signIn({ email, password })
  }

  return (
    <Container>
      <div> 
        <BsHexagonFill/>
        <h1>Food Explorer</h1>
      </div>
      <div>
        <Form>
          <h2>Faça login</h2>
          <div>
            <label htmlFor="email">Email</label>
            <Input
              placeholder="Exemplo: exemplo@exemplo.com"
              type="text"
              id="email"
              onChange={e => setEmail(e.target.value)}
              />
          </div>
          <div>
            <label htmlFor="password">Senha</label>
            <Input 
              placeholder="No mínimo 6 caracteres"
              type="password"
              id="password"
              onChange={e => setPassword(e.target.value)}
              />
          </div>
          <Button
            title="Entrar"
            onClick={handleSignIn}
          />
          <ButtonText 
            title="Criar uma conta"
            to="/register"
          />
        </Form>
      </div>
    </Container>
  )
}