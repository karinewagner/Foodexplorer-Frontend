import { Container, Logo } from './styles'

import { FiLogOut, FiSearch, FiFileText} from 'react-icons/fi'
import { BsHexagonFill } from 'react-icons/bs'

import { Input } from '../Input'
import { ButtonText } from '../ButtonText'
import { Button } from '../Button'

export function Header() {
  return (
    <Container>
        <Logo to="/profile">
          <BsHexagonFill/>
          <h1>Food Explorer</h1>
        </Logo>
        <h2>Meus favoritos</h2>
        <Input
          icon={FiSearch}
          placeholder="Busque pelas opções de pratos"
          type="text"
        />
        <Button className="btnRequest"
          icon={FiFileText}
          title="Meu pedido"          
        />
        <ButtonText
          icon={FiLogOut}
        />
    </Container>
  )
}