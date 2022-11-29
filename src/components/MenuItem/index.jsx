import { Container } from './styles'

import Ravanello from '../../img/dishes-image/Ravanello.png'

import { FiHeart, FiPlus, FiMinus } from 'react-icons/fi'

import { ButtonText } from '../ButtonText'
import { Button } from '../Button'

export function MenuItem({ data, ...rest}) {
  return (
    <Container {...rest}>
      <ButtonText icon={FiHeart} />
      <div className='itemOfList'>
        <img width="245" height="245" src={Ravanello} alt="Imagem da Salada Ravanello" />
        <h2>Salada Ravanello &gt;</h2>
        <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim</p>
        <strong>R$ 49,97</strong>
        <div className='amount'>
          <div className='plusOrMinus'>
            <ButtonText icon={FiMinus} />
            <span>01</span>
            <ButtonText icon={FiPlus} />
          </div>
          <Button title="incluir" />
        </div>
      </div>
    </Container>
  )
}