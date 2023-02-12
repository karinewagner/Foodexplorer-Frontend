import { Container, Content, Form, ImageDishAdd } from './styles'

import { FiChevronLeft, FiUpload, FiPlusSquare} from 'react-icons/fi'
import { useState} from 'react'
import { useNavigate} from 'react-router-dom'

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
  const [price, setPrice] = useState("")
  const [description, setDescription] = useState("")

  const [ingredients, setIngredients] = useState([])
  const [newIngredient, setNewIngredient] = useState("")

  const navigate = useNavigate()

  function backToHome() {
      navigate(-1)
  }
  
  function handleAddIngredient() {
    setIngredients(prevState => [...prevState, newIngredient])
    setNewIngredient("")
  }
  
  function handleRemoveIngredient(deleted) {
    setIngredients(prevState => prevState.filter(ingredient => ingredient !== deleted))
  }

  async function handleNewDish() {
    if (!imageFile) {
      return alert("A inclusão de uma imagem ao prato é obrigatória, por gentileza ajustar para continuar!")
    }
    
    if (!title || !price || !description) {
      return alert("Por gentileza, preecha todos os campos!")
    }

    if (newIngredient) {
      return alert("Você deixou um ingrediente no campo de adicionar, clique para adicionar ou deixe o campo vázio.")
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
      .post("/dishes", formData)
      .then(alert("Prato criado com sucesso!"))
      .catch((error) => {

        if (error.response) {
          alert(error.response.data.message)

        } else {
          alert("Erro ao criar o prato")
        }
      })

      navigate("/")
    }
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

          <h2>Adicionar prato</h2>

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

              <h3>Ingredientes</h3>

              <div className='input'>

                {
                  ingredients.map((ingredient, index) => (
                    <NewIngredient 
                      key={String(index)}
                      value={ingredient}
                      onChange={(e) => setNewIngredient(e.target.value)}
                      onClick={() => handleRemoveIngredient(ingredient)}
                    />
                  ))
                }

                <NewIngredient 
                  isNew 
                  placeholder="Adicionar"
                  value={newIngredient}
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
                onChange={e => setPrice(e.target.value)}
              />

            </section>

            <section>

              <h3>Descrição</h3>

              <Textarea 
                id="descriptionDish" 
                placeholder="Fale brevemente sobre o prato, seus ingredientes e/ou composição."
                onChange={e => setDescription(e.target.value)}
              />

            </section>

            <div className='buttons'>
              <Button icon={FiPlusSquare} title="Adicionar prato" onClick={handleNewDish}/>
            </div>

          </Form>

        </Content>

      </main>

      <Footer/>

    </Container>
  )
}