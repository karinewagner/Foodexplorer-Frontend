import { Container } from './styles'
import Polygon from '../../img/icons/Polygon.svg'

import { FiLogOut, FiSearch, FiFileText} from 'react-icons/fi'

import { Input } from '../Input'
import { ButtonText } from '../ButtonText'
import { Button } from '../Button'

export function Header() {
  return (
    <Container>
        <div className='logo'>
          <img width="30" height="30" src={Polygon} alt="Logo" />
          <h1>Food Explorer</h1>
        </div>
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