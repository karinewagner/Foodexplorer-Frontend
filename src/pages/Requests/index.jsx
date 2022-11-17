import { Container, Content } from './styles'

import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'


export function Requests() {
  return (
    <Container>
      <Header/>
      <Content className='content'>
        <h2>Pedidos</h2>
        <table>
          <thead>
            <tr>
              <th>Status</th>
              <th>Código</th>
              <th>Detalhamento</th>
              <th>Data e hora</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>
                <div className='statusCircle'></div>
                Pendente
              </th>
              <th>00000004</th>
              <th>1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá</th>
              <th>20/05 às 18h00</th>
            </tr>
            <tr>
              <th>
                <div className='statusCircle'></div>
                Pendente
              </th>
              <th>00000004</th>
              <th>1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá</th>
              <th>20/05 às 18h00</th>
            </tr>
            <tr>
              <th>
                <div className='statusCircle'></div>
                Pendente
              </th>
              <th>00000004</th>
              <th>1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá</th>
              <th>20/05 às 18h00</th>
            </tr>
            <tr>
              <th>
                <div className='statusCircle'></div>
                Pendente
              </th>
              <th>00000004</th>
              <th>1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá</th>
              <th>20/05 às 18h00</th>
            </tr>
          </tbody>          
        </table>
      </Content>
      <Footer/>
    </Container>
  )
}