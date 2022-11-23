import { Container, Content } from './styles'
import Ravanello from '../../img/dishes-image/Salada-molla.png'
import Alface from '../../img/dishes-image/alface.png'

import { FiPlus, FiMinus, FiChevronLeft, FiFileText } from 'react-icons/fi'

import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText'
import { Button } from '../../components/Button'
import { Footer } from '../../components/Footer'


export function Details() {
  return (
    <Container>
      <Header/>
      <Content className='content'>
        <ButtonText 
          icon={FiChevronLeft}
          title="voltar"
          to="/requests/:id"
        />
        <div className='dishDetails'>
          <img width="350" height="350" src={Ravanello} alt="Imagem da Salada Ravanello" />
          <div className='descriptionDetails'>
            <h2>Salada Ravanello </h2>
            <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim</p>
            <ul>
              <li>
                <img width="55" height="55" src={Alface} alt="Imagem do alimento alface" />
                <span>alface</span>
              </li>
              <li>
                <img width="55" height="55" src={Alface} alt="Imagem do alimento alface" />
                <span>alface</span>
              </li>
              <li>
                <img width="55" height="55" src={Alface} alt="Imagem do alimento alface" />
                <span>alface</span>
              </li>
              <li>
                <img width="55" height="55" src={Alface} alt="Imagem do alimento alface" />
                <span>alface</span>
              </li>
            </ul>
            <div className='amount'>
              <strong>R$ 49,97</strong>
              <div className='plusOrMinus'>
                <ButtonText icon={FiMinus} />
                <span>01</span>
                <ButtonText icon={FiPlus} />
              </div>
              <Button icon={FiFileText} title="incluir" />
              </div>
            </div>
          </div>
      </Content>
      <Footer/>
    </Container>
  )
}