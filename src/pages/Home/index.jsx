import { Container, Content } from './styles'
import BackgroundImg from '../../img/background/img-main.png'

//import { Carousel } from 'react-responsive-carousel'

import { Header } from '../../components/Header'
import { Section } from '../../components/Section'
import { MenuItem } from '../../components/MenuItem'
import { Footer } from '../../components/Footer'

import { useDishes } from '../../hooks/dish'

export function Home() {
  const { dishes } = useDishes();

  return (
    <Container>

      <Header/>

      <Content className='content'>

        <main>

          <img src={BackgroundImg} alt="Doces coloridos" />

          <div>
            <h2>Sabores inigualáveis</h2>
            <p>Sinta o cuidado do preparo com ingredientes selecionados </p>
          </div>

        </main>

        <Section title="Pratos principais">

        {
          dishes.map((item, index) => (
            item.category === 'prato principal' && 
              <MenuItem key={index} data={item}/>
          ))
        }

        </Section>

        <Section title="Sobremesas">

          {
            dishes.map((item, index) => (
              item.category === 'sobremesa' && 
                <MenuItem key={index} data={item}/>
            ))
          }

        </Section>

        <Section title="Bebidas">

          {
            dishes.map((item, index) => (
              item.category === 'bebida' && 
              <MenuItem key={index} data={item} />
            ))
          }

        </Section>

        <Footer/>
        
      </Content>

    </Container>
  )
}