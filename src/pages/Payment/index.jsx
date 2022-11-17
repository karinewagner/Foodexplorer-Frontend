import { Container, Content, Form } from './styles'
//import Ravanello from '../../img/dishes-image/Salada-molla.png'


import { Header } from '../../components/Header'

import { Footer } from '../../components/Footer'


export function Payment() {
  return (
    <Container>
      <Header/>
      <Content className='content'>
        <section>
          <h2>Meu pedido</h2>
          <div className='detailsDish'>
            <img src="https://github.com/karinewagner.png" alt="" />
            <div>
              <div>
                <span>1X</span>
                <p>Salada Radish</p>
                <strong>R$ 25,97</strong>
              </div>
              <button>Excluir</button>
            </div>
          </div>
          <div className='detailsDish'>
            <img src="https://github.com/karinewagner.png" alt="" />
            <div>
              <div>
                <span>1X</span>
                <p>Salada Radish</p>
                <strong>R$ 25,97</strong>
              </div>
              <button>Excluir</button>
            </div>
          </div>
          <div className='detailsDish'>
            <img src="https://github.com/karinewagner.png" alt="" />
            <div>
              <div>
                <span>1X</span>
                <p>Salada Radish</p>
                <strong>R$ 25,97</strong>
              </div>
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
            <div>
              <Form action="">
                <div >
                  <label for="card-number">Número do cartão</label>
                  <input id="card-number" />
                </div>

                <div >
                  <label for="card-holder">Nome do titular</label>
                  <input id="card-holder" />
                </div>

                <div className='flex'>
                  <div >
                    <label for="expiration-date">Expiração</label>
                    <input id="expiration-date" />
                  </div>

                  <div >
                    <label for="security-code">CVC</label>
                    <input id="security-code" />
                  </div>
                </div>

                <button id="add-card">ADICIONAR CARTÃO</button>
              </Form>
            </div>
          </div>
        </section>
      </Content>
      <Footer/>
    </Container>
  )
}