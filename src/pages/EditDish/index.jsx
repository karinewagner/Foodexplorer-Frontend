import { Container, Content, Form, ImageDishAdd } from './styles'

import { FiChevronLeft, FiUpload, FiEdit, FiXSquare } from 'react-icons/fi'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText'
import { Input } from '../../components/Input'
import { NewIngredient } from '../../components/NewIngredient'
import { Textarea } from '../../components/Textarea'
import { Button } from '../../components/Button'
import { Footer } from '../../components/Footer'

import { api } from '../../services/api'

export function EditDish() {
  const [imageFile, setImageFile] = useState(null)
  const [title, setTitle] = useState("")
  const [price, setPrice] = useState("")
  const [description, setDescription] = useState("")

  const [ingredients, setIngredients] = useState([])
  const [newIngredient, setNewIngredient] = useState("")

  const navigate = useNavigate()
  const params = useParams()

  function backToHome() {
      navigate(-1)
  }

  function handleAddIngredient() {
    setIngredients(prevState => [...prevState, newIngredient])
    setNewIngredient("")
  }
  
  function handleRemoveIngredient(deleted) {
    setIngredients(prevState => prevState.filter((ingredient) => ingredient !== deleted))
  }

  async function handleEditDish() {
    if (!imageFile) {
      return alert("A atualização da imagem é obrigatória, por gentileza ajustar para continuar!")
    }

    if (!title || !price || !description) {
      alert("Por gentileza, preecha todos os campos!")
    }

      if (newIngredient) {
        return alert("Você deixou um ingrediente no campo de adicionar, clique para adicionar ou deixe o campo vázio para continuar.")
      }

      if (ingredients.length < 2) {
        alert("Por gentileza, adicionar no minimo 2 ingredientes!")

      } else {
        const formData = new FormData()
        formData.append("img", imageFile[0])
        formData.append("title", title)
        formData.append("description", description)
        formData.append("price", price)

        for (let i = 0; i < ingredients.length; i += 1) {
          formData.append("ingredients", ingredients[i])
        }

        await api
          .put(`/dishes/${params.id}`, formData)
          .then(alert("Prato editado com sucesso!"))
          .catch((error) => {

            if (error.response) {
              alert(error.response.data.message)

            } else {
              alert("Erro ao editar o prato")
            }
          })

          navigate("/")
      }
  }

  async function handleRemoveDish() {
      const isConfirm = confirm("Tem certeza que deseja deletar esse item?")

      if(isConfirm) {
        await api.delete(`/dishes/${params.id}`)
        navigate("/")
      }
  }

  
  useEffect(() => {
    async function fetchDish() {
      const response = await api.get(`/dishes/${params.id}`)

      const { title, description, price, ingredients } = response.data
      setTitle(title)
      setDescription(description)
      setPrice(price)
      setIngredients(ingredients.map(item => item.name))
    }

    fetchDish()
  }, [])

  return (
    <Container>

      <Header/>

      <main>
        <Content className='content'>

          <ButtonText 
            icon={FiChevronLeft}
            title="voltar"
            onClick={backToHome}
          />

          <h2>Editar prato</h2>

          <Form>

            <section>
              
              <h3>Imagem do prato</h3>

              <div className='input'>

                <ImageDishAdd>
                  <label htmlFor="imageDish">

                    <FiUpload/>
                    <input 
                      id="imageDish" 
                      type="file"
                      defaultValue={imageFile}
                      onChange={e => setImageFile(e.target.files)} />

                  </label>

                  <span>escolha uma imagem</span>

                </ImageDishAdd>

              </div>

            </section>

            <section>

              <h3>Nome</h3>

              <Input 
                id="nameDish" 
                placeholder="Ex: Salada Ceasar"
                defaultValue={title}
                onChange={e => setTitle(e.target.value)}
              />

            </section>

            <section>

              <h3>Ingredientes</h3>

              <div className='input'>

                {
                  ingredients.map((ingredient, index) => (
                    <NewIngredient 
                      key={String(index)}
                      defaultValue={ingredient}                    
                      onChange={(e) => setNewIngredient(e.target.value)}
                      onClick={() => handleRemoveIngredient(ingredient)}
                    />
                  ))
                }

                <NewIngredient 
                  isNew 
                  placeholder="Adicionar"
                  defaultValue={newIngredient}
                  onChange={(e) => setNewIngredient(e.target.value)}
                  onClick={handleAddIngredient}
                />

              </div>

            </section>

            <section>

              <h3>Preço</h3>

              <Input 
                type="text"
                id="priceDish" 
                placeholder="R$ 00,00"
                defaultValue={price}
                onChange={e => setPrice(e.target.value)}
              />

            </section>

            <section>

              <h3>Descrição</h3>

              <Textarea 
                id="descriptionDish" 
                placeholder="Fale brevemente sobre o prato, seus ingredientes e/ou composição"
                defaultValue={description}
                onChange={e => setDescription(e.target.value)}
              />

            </section>

            <div className='buttons'>
              <Button icon={FiEdit} title="Editar prato" onClick={handleEditDish}/>
              <Button icon={FiXSquare} title="Excluir prato" onClick={handleRemoveDish}/>
            </div>

          </Form>

        </Content>

      </main>

      <Footer/>

    </Container>
  )
}