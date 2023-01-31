import { Container } from './styles'

import { BsHexagonFill } from 'react-icons/bs'

export function Footer() {
  return (
    <Container>
        <div>
          <BsHexagonFill/>
          <h2>Food Explorer</h2>
        </div>
        <h3>
          © 2023 - Todos os direitos reservados.
        </h3>
    </Container>
  )
}