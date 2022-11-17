import { Container, Content, Form, ImageDishAdd } from './styles'

import { FiChevronLeft, FiUpload, FiPlusSquare, FiEdit, FiXSquare } from 'react-icons/fi'
 
import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText'
import { Input } from '../../components/Input'
import { NewIngredient } from '../../components/NewIngredient'
import { Textarea } from '../../components/Textarea'
import { Button } from '../../components/Button'
import { Footer } from '../../components/Footer'

export function NewDish() {
  return (
    <Container>
      <Header/>
      <main>
        <Content className='content'>
          <ButtonText 
              icon={FiChevronLeft}
              title="voltar"
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
              />
            </section>
            <section>
              <h3 >Ingredientes</h3>
              <div className='input'>
                <NewIngredient value="Alface"/>
                <NewIngredient isNew placeholder="Adicionar"/>
              </div>
            </section>
            <section>
              <h3>Preço</h3>
              <Input 
                id="valueDish" 
                placeholder="R$ 00,00"
              />
            </section>
            <section>
              <h3>Descrição</h3>
              <Textarea 
                id="DescriptionDish" 
                placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
              />
            </section>
          </Form>
          <div className='buttons'>
            <Button icon={FiPlusSquare} title="Adicionar prato"/>
            <Button icon={FiEdit} title="Editar prato"/>
            <Button icon={FiXSquare} title="Excluir prato"/>
          </div>
        </Content>
      </main>
      <Footer/>
    </Container>
  )
}