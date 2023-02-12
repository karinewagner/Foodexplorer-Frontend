import { Container } from './styles'

import { FiHeart, FiPlus, FiMinus } from 'react-icons/fi'
import { BsPencil } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'

import { Button } from '../Button'

import { api } from '../../services/api'
import { useAuth } from '../../hooks/auth'

export function MenuItem({ data }) {
  const imageURL = data && `${api.defaults.baseURL}/files/${data.img}`
  
  const { user } = useAuth()
  const navigate = useNavigate()

  function handleDetails(id) {
    navigate(`/details/${id}`)
  }

  function handleEditDish(id) {
    navigate(`/editdish/${id}`)
  }

  return (
    <Container >
      
      <div className='btns'>
        {
          user.is_admin && 
            <Button
              icon={BsPencil}
              className='edit-dish'
              onClick={() => handleEditDish(data.id)}
            />
        }

        <Button className='favorite-dish' icon={FiHeart} />
      </div>

      {
        data &&
          <div className='itemOfList'>

            <button type="button" onClick={() => handleDetails(data.id)}>
              <img width="230" height="230" src={imageURL} alt="Imagem ilustrativa do prato escolhido"/>
            </button>

            <h2>{data.title} &gt;</h2>
            <p>{data.description}</p>
            <strong>R$ {data.price}</strong>

            <div className='amount'>

              <div className='plusOrMinus'>
                <Button icon={FiMinus} />
                <span>01</span>
                <Button icon={FiPlus} />
              </div>
              
              <Button title={"incluir"} />

            </div>
            
          </div>
      }

    </Container>
  )
}