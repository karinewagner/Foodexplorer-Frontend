import { Container, Content } from './styles'
import BackgroundImg from '../../img/background/img-main.png'

import { Header } from '../../components/Header'
import { MenuItem } from '../../components/MenuItem'
import { Footer } from '../../components/Footer'


export function Home() {
  return (
    <Container>
      <Header/>
      <Content className='content'>
        <main>
          <img src={BackgroundImg} alt="Doces coloridos" />
          <div>
            <h2>Sabores inigualáveis </h2>
            <p>Sinta o cuidado do preparo com ingredientes selecionados </p>
          </div>
        </main>
        <section>
          <h2>Pratos principais</h2>
          <div>
            <MenuItem/>
            <MenuItem/>
            <MenuItem/>
            <MenuItem/>
          </div>
        </section>
        <section>
          <h2>Sobremesas</h2>
          <div>
            <MenuItem/>
            <MenuItem/>
            <MenuItem/>
            <MenuItem/>
          </div>
        </section>
        <section>
          <h2>Bebidas</h2>
          <div>
            <MenuItem/>
            <MenuItem/>
            <MenuItem/>
            <MenuItem/>
          </div>
        </section>
        <Footer/>
      </Content>
    </Container>
  )
}