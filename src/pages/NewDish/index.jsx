import { Container, Content, Form, ImageDishAdd } from './styles'

import { FiChevronLeft, FiUpload, FiPlusSquare, FiEdit, FiXSquare } from 'react-icons/fi'
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

export function NewDish() {
  const [imageFile, setImageFile] = useState(null)
  const [title, setTitle] = useState("")
  const [value, setValue] = useState("")
  const [description, setDescription] = useState("")

  const [ingredients, setIngredients] = useState([])
  const [newIngredient, setNewIngredient] = useState("")

  const navigate = useNavigate()
  const params = useParams()

  function handleAddIngredient() {
    setIngredients(prevState => [...prevState, newIngredient])
    setNewIngredient("")
  }
  
  function handleRemoveIngredient(deleted) {
    setIngredients(prevState => prevState.filter(ingredient => ingredient !== deleted))
  }

  async function handleNewDish() {
    if (!title || !value || !description) {
      return alert("Por gentileza, preecha todos os campos!")
    }

    if (newIngredient) {
      return alert("Você deixou um ingrediente no campo de adicionar, clique para adicionar ou deixe o campo vázio.")
    }
    
    await api.post("/dishes", {imageFile, title, ingredients, value, description})
    console.log(imageFile, title, ingredients, value, description)
    
    alert("Prato criado com sucesso!")
    navigate(-1)
  }

  async function handleEditDish() {
    if (!title || !value || !description) {
      alert("Por gentileza, preecha todos os campos!")
    }

    if (ingredients.length < 2) {
      alert("Por gentileza, adicionar no minimo 2 ingredientes!")
    } else {
      const formData = new FormData()
      formData.append("img", imageFile)
      formData.append("title", title)
      formData.append("description", description)
      formData.append("price", price)

      for (let i = 0; i < ingredients.length; i += 1) {
        formData.append("ingredients", ingredients[i])
      }

      //console.log(ingredients)

      await api
        .put(`/dishes/${params.id}`, formData)
        .then(alert("Prato editado com sucesso!"))
        .catch((error) => {
          if (error.response) {
            alert(error.response.data.message)
          } else {
            alert("Erro ao criar o prato")
          }
        })

      navigate(-1)
    }
  }

  async function handleRemoveDish() {
    const isConfirm = confirm("Tem certeza que deseja remover?")

    if(isConfirm) {
      await api.delete(`/newdish/${params.id}`)
      navigate(-1)
    }
  }

  function backToHome() {
    navigate(-1)
  }
    

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
                onChange={e => setTitle(e.target.value)}
              />
            </section>
            <section>
              <h3 >Ingredientes</h3>
              <div className='input'>
                {
                  ingredients.map((ingredient, index) => (
                    <NewIngredient 
                      key={String(index)}
                      value={ingredient}
                      onClick={() => handleRemoveIngredient(ingredient)}
                    />
                  ))

                }
                <NewIngredient 
                  isNew 
                  placeholder="Adicionar"
                  value={newIngredient}
                  onChange={e => setNewIngredient(e.target.value)}
                  onClick={handleAddIngredient}
                />
              </div>
            </section>
            <section>
              <h3>Preço</h3>
              <Input 
                id="valueDish" 
                placeholder="R$ 00,00"
                onChange={e => setValue(e.target.value)}
              />
            </section>
            <section>
              <h3>Descrição</h3>
              <Textarea 
                id="DescriptionDish" 
                placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
                onChange={e => setDescription(e.target.value)}
              />
            </section>
          </Form>
          <div className='buttons'>
            <Button icon={FiPlusSquare} title="Adicionar prato" onClick={handleNewDish}/>
            <Button icon={FiEdit} title="Editar prato" onClick={handleEditDish}/>
            <Button icon={FiXSquare} title="Excluir prato" onClick={handleRemoveDish}/>
          </div>
        </Content>
      </main>
      <Footer/>
    </Container>
  )
}