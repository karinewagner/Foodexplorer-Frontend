import { Container, Form } from './styles'

import { useState } from 'react'
import { FiUser, FiChevronLeft, FiMail, FiLock } from 'react-icons/fi'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'
import { useNavigate } from 'react-router-dom'

import { useAuth } from '../../hooks/auth'

export function Profile() {
  const { user, updateProfile } = useAuth()

  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [passwordOld, setPasswordOld] = useState()
  const [passwordNew, setPasswordNew] = useState()

  const navigate = useNavigate()

  async function handleUpdate() {
    const user = {name, email, old_password: passwordOld, password: passwordNew}
    await updateProfile({ user })
  }

  async function handleBackAfterUpdate() {
    await handleUpdate()
    navigate(-1)
  }

  return (
    <Container>
      <div className='btn'>
        <ButtonText 
          icon={FiChevronLeft}
          title="voltar"
          to="/"
          />
      </div>
      <Form>
        <div>
          <label htmlFor="email">Nome do usuário</label>
          <Input 
            placeholder='Exemplo: Maria da Silva'
            icon={FiUser} 
            type='text'
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">E-mail do usuário</label>
          <Input 
            placeholder='Exemplo: exemplo@exemplo.com'
            icon={FiMail} 
            type='text'
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Senha atual</label>
          <Input 
            placeholder='No mínimo 6 caracteres'
            icon={FiLock} 
            type='password'
            onChange={e => setPasswordOld(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Nova senha</label>
          <Input 
            placeholder='No mínimo 6 caracteres'
            icon={FiLock} 
            type='password'
            onChange={e => setPasswordNew(e.target.value)}
          />
        </div>
        <Button title='Salvar' onClick={handleBackAfterUpdate}/>
      </Form>
    </Container>
  )
}