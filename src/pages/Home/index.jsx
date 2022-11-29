import { Container, Content } from './styles'
import BackgroundImg from '../../img/background/img-main.png'

import { useNavigate } from 'react-router-dom'

import { Header } from '../../components/Header'
import { MenuItem } from '../../components/MenuItem'
import { Footer } from '../../components/Footer'

import { useDishes } from '../../hooks/dish'

export function Home() {
  const { dishes } = useDishes();
  const navigate = useNavigate()

  function handleDetails(id) {
    navigate(`/details/${id}`)
  }

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
        <section>
          <h2>Pratos principais</h2>
          <div>
            {
              dishes.map((dish, index) => (             
                <MenuItem
                  key={index}
                  data={dish}
                  onClick={() => handleDetails(dish.id)}
                />
              ))
            }
          </div>
        </section>
        <section>
          <h2>Sobremesas</h2>
          <div>
            {
              dishes.map(dish => (             
                <MenuItem
                  key={String(dish.id)}
                  onClick={() => handleDetails(dish.id)}
                  >
                  <h2>{dish.title}</h2>
                  <p>{dish.description}</p>
                </MenuItem>
              ))
            }
          </div>
        </section>
        <section>
          <h2>Bebidas</h2>
          <div>
            {
              dishes.map(dish => (             
                <MenuItem
                  key={String(dish.id)}
                  onClick={() => handleDetails(dish.id)}
                >
                  <h2>{dish.title}</h2>
                  <p>{dish.description}</p>
                </MenuItem>
              ))
            }
          </div>
        </section>
        <Footer/>
      </Content>
    </Container>
  )
}