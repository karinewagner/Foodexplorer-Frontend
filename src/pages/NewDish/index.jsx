import { Container, Content, Form, ImageDishAdd } from './styles'

import { FiChevronLeft, FiUpload, FiPlusSquare, FiEdit, FiXSquare } from 'react-icons/fi'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText'
import { Input } from '../../components/Input'
import { NewIngredient } from '../../components/NewIngredient'
import { Textarea } from '../../components/Textarea'
import { Button } from '../../components/Button'
import { Footer } from '../../components/Footer'

import { api } from '../../services/api'

export function NewDish() {
  //const [] = useState() image // FALTA AJUSTAR A IMAGEM DO PRATO E DO INGREDIENTE
  const [title, setTitle] = useState()
  const [value, setValue] = useState()
  const [description, setDescription] = useState()

  const [ingredients, setIngredients] = useState([])
  const [newIngredient, setNewIngredient] = useState("")

  const [] = useState()

  const navigate = useNavigate()

  function handleAddIngredient() {
    setIngredients(prevState => [...prevState, newIngredient])
    setNewIngredient("")
  }
  
  function handleRemoveIngredient(deleted) {
    setIngredients(prevState => prevState.filter(ingredient => ingredient !== deleted))
  }

  async function handleNewDish() {
    if (!title) {
      return alert("Digite um nome para o prato.")
    }

    if (!value) {
      return alert("Digite um valor para o prato.")
    }

    if (newIngredient) {
      return alert("Você deixou um ingrediente no campo de adicionar, clique para adicionar ou deixe o campo vázio.")
    }
    
    await api.post("/dishes", {title, ingredients, value, description})
    
    alert("Prato criado com sucesso!")
    navigate("/")
  }

  return (
    <Container>
      <Header/>
      <main>
        <Content className='content'>
          <ButtonText 
              icon={FiChevronLeft}
              title="voltar"
              to="/"
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
                      type="file"/>
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
            <Button icon={FiEdit} title="Editar prato"/>
            <Button icon={FiXSquare} title="Excluir prato"/>
          </div>
        </Content>
      </main>
      <Footer/>
    </Container>
  )
}