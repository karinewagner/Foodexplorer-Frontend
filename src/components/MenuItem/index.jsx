import { Container } from './styles'

import { FiHeart, FiPlus, FiMinus } from 'react-icons/fi'
import { BsPencil } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'

import { ButtonText } from '../ButtonText'
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

      <ButtonText 
        className='edit-dish' 
        onClick={() => handleEditDish(data.id)}
      >
        {user.admin === 1 && (<BsPencil/>)}
      </ButtonText>

      <ButtonText className='favorite-dish' icon={FiHeart} />
          {
            data &&
              <div className='itemOfList'>

                <button type="button" onClick={() => handleDetails(data.id)}>
                  <img width="245" height="245" src={imageURL} alt="Imagem ilustrativa do prato escolhido"/>
                </button>

                <h2>{data.title} &gt;</h2>
                <p>{data.description}</p>
                <strong>R$ {data.value}</strong>

                <div className='amount'>

                  <div className='plusOrMinus'>
                    <ButtonText icon={FiMinus} />
                    <span>01</span>
                    <ButtonText icon={FiPlus} />
                  </div>
                  
                  <Button title={"incluir"} />

                </div>
                
              </div>
          }
    </Container>
  )
}