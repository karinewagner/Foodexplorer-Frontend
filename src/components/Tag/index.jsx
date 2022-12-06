import { Container } from './styles'
import { Ingredients } from '../Ingredients'

export function Tag({ title, ...rest}) {
  return (
    <Container {...rest}>
      <Ingredients name={title}/>
      {title}
    </Container>
  )
}