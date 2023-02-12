import { Container, Content } from './styles'

import { FiChevronLeft } from 'react-icons/fi'

import SaladaMolla from '../../img/dishes-image/dish/Salada-molla.png'
import SVG from '../../img/background/svg.svg'

import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText'
import { Footer } from '../../components/Footer'

export function Payment() {
  return (
    <Container>

      <Header/>

      <Content className='content'>

        <ButtonText title="voltar" to="/" />

        <section>

          <h2>Meu pedido</h2>

          <div className='detailsDish'>

            <img src={SaladaMolla} alt="Imagem do prato" />
            
            <div>
              <p>1X Salada Molla - R$ 25,97</p>
              <button>Excluir</button>
            </div>

          </div>

          <div className='detailsDish'>

            <img src={SaladaMolla} alt="Imagem do prato" />
            
            <div>
              <p>1X Salada Molla - R$ 25,97</p>
              <button>Excluir</button>
            </div>

          </div>

          <div className='detailsDish'>

            <img src={SaladaMolla} alt="Imagem do prato" />

            <div>
              <p>1X Salada Molla - R$ 25,97</p>
              <button>Excluir</button>
            </div>

          </div>

          <h3>Total: R$ 103,89</h3>

        </section>

        <section>

          <h2>Pagamento</h2>

          <div className='payment'>
            <div>
              <p>PIX</p>
              <p>Crédito</p>
            </div>
            <img src={SVG} alt="Imagem de pagamento aprovado" />
            <span>Pagamento aprovado!</span>
          </div>
        </section>

      </Content>

      <Footer/>

    </Container>
  )
}