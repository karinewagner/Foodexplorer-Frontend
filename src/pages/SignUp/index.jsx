import { Container, Form } from './styles'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'

export function SignUp() {
  return (
    // ajustar importação do svg
    <Container>
      <div> 
        <svg width="44" height="48" viewBox="0 0 44 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22.0318 0.216492L43.4349 12.0918V35.8425L22.0318 47.7179L0.628698 35.8425V12.0918L22.0318 0.216492Z" fill="#065E7C"/>
        </svg>
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
              />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <Input
              placeholder="Exemplo: exemplo@exemplo.com"
              type="text"
              id="email"
              />
          </div>
          <div>
            <label htmlFor="password">Senha</label>
            <Input 
              placeholder="No mínimo 6 caracteres"
              type="password"
              id="password"
              />
          </div>
          <Button
            title="Criar conta"
          />
          <ButtonText 
            title="Já tenho uma conta"
          />
        </Form>
      </div>
    </Container>
  )
}