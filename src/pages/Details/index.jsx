import { Container, Content } from './styles'

import { FiPlus, FiMinus, FiChevronLeft, FiFileText } from 'react-icons/fi'
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText'
import { Button } from '../../components/Button'
import { Tag } from '../../components/Tag'
import { Footer } from '../../components/Footer'

import { api } from '../../services/api'

export function Details() {
  const [data, setData] = useState(null)

  const imageURL = data && `${api.defaults.baseURL}/files/${data.img}`

  const params = useParams()
  const navigate = useNavigate()

  function handleBack() {
    navigate(-1)
  }

  useEffect(() => {
    async function fetchDish() {
      const response = await api.get(`/dishes/${params.id}`)
      setData(response.data)
    }

    fetchDish()
  }, [])

  return (
    <Container>

      <Header/>

      <Content className='content'>
        
        <ButtonText 
          icon={FiChevronLeft}
          title="voltar"
          onClick={handleBack}
        />
        { 
          data &&
          <div className='dishDetails'>

            <img width="350" height="350" src={imageURL} alt="Imagem ilustrativa do prato escolhido" />

            <div className='descriptionDetails'>

              <h2>{data.title} </h2>
              <p>{data.description}</p>

              <ul>
                <li>
                {
                  data.ingredients.map( ingredient => (
                    <Tag 
                      key={String(ingredient.id)} 
                      title={ingredient.name}
                    />
                  ))
                }
                </li> 
              </ul>

              <div className='amount'>

                <strong>R$ {data.price}</strong>

                <div className='plusOrMinus'>
                  <ButtonText icon={FiMinus} />
                  <span>01</span>
                  <ButtonText icon={FiPlus} />
                </div>

                <Button icon={FiFileText} title="incluir" />

              </div>

            </div>
            
          </div>
        }
      </Content>

      <Footer/>

    </Container>
  )
}