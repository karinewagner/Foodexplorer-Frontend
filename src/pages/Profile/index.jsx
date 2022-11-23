import { Container, Form } from './styles'

import { FiPlus, FiMinus, FiChevronLeft, FiFileText } from 'react-icons/fi'
import { AiOutlineArrowLeft, AiOutlineUserAdd, AiOutlineMail, AiOutlineUnlock, AiOutlineLock } from 'react-icons/ai'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'

export function Profile() {
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
            icon={AiOutlineUserAdd} 
            type='text'
          />
        </div>
        <div>
          <label htmlFor="email">E-mail do usuário</label>
          <Input 
            placeholder='Exemplo: exemplo@exemplo.com'
            icon={AiOutlineMail} 
            type='text'
          />
        </div>
        <div>
          <label htmlFor="email">Senha atual</label>
          <Input 
            placeholder='No mínimo 6 caracteres'
            icon={AiOutlineUnlock} 
            type='password'
          />
        </div>
        <div>
          <label htmlFor="email">Nova senha</label>
          <Input 
            placeholder='No mínimo 6 caracteres'
            icon={AiOutlineLock} 
            type='password' 
          />
        </div>
        <Button title='Salvar'/>
      </Form>
    </Container>
  )
}