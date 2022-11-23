import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { BsHexagonFill } from 'react-icons/bs'

import { api } from '../../services/api'
import { Container, Form } from './styles'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'

export function SignUp() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  function handleSignUp() {
    if (!name || !email || !password) {
      return alert("Por favor, preencha todos os campos!")
    }

    api.post("/users", { name, email, password })
      .then(() => {
        alert("Usuário cadastrado com sucesso!")
        navigate("/")
      })
      .catch ( error => {
        if (error.response) {
          alert(error.response.data.message)
        } else {
          alert("Não foi possível cadastrar.")
        }
      })
  }

  return (
    <Container>
      <div> 
        <BsHexagonFill/>
        <h1>Food Explorer</h1>
      </div>
      <div>
        <Form>
          <h2>Criar sua conta</h2>
          <div>
            <label htmlFor="name">Seu nome</label>
            <Input
              placeholder="Exemplo: Maria da Silva"
              type="text"
              id="name"
              onChange={e => setName(e.target.value)}
              />
          </div>
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
            title="Criar conta"
            onClick={handleSignUp}
          />
          <ButtonText 
            title="Já tenho uma conta"
            to="/"
          />
        </Form>
      </div>
    </Container>
  )
}