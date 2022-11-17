import { Container } from './styles'
import PolygonFooter from '../../img/icons/PolygonFooter.svg'

export function Footer() {
  return (
    <Container>
        <div className='logo'>
          <img width="30" height="30" src={PolygonFooter} alt="Logo" />
          <h2>Food Explorer</h2>
        </div>
        <h3>
          © 2022 - Todos os direitos reservados.
        </h3>
    </Container>
  )
}