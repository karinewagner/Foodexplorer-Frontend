import { Container } from './styles'

export function Input({icon: Icon, id, ...rest}) {
  return (
    <Container id="text">
      {Icon && <Icon size={20}/>}
      <input {...rest}/>
    </Container>
  )
}