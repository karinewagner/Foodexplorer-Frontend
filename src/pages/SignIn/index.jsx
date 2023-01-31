import { Container, Form } from './styles'

import { BsHexagonFill } from 'react-icons/bs'
import { useState } from 'react'

import { useAuth } from '../../hooks/auth'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'

export function SignIn() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)

  const { signIn } = useAuth()

  function handleSignIn() {
    signIn({ email, password })
    setLoading(true)
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
              type="text"
              id="email"
              placeholder="Exemplo: exemplo@exemplo.com"
              onChange={e => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="password">Senha</label>
            <Input 
              type="password"
              id="password"
              placeholder="No mínimo 6 caracteres"
              onChange={e => setPassword(e.target.value)}
            />
          </div>

          <Button
            title="Entrar"
            loading={loading}
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