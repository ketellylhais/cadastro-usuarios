//uso para referenciar um elemento. ex: os inputs
import { useRef } from 'react' 

import { useNavigate } from 'react-router-dom'

import api from '../../services/api'

import Button from '../../components/Button'
import TopBackground from '../../components/TopBackground'
import ContainerDefault from '../../components/Container'

import {  //importar os componentes do css
  Title,
  ContainerInputs,
  Input,
  Form,
  Label
} from './styles'



//essa função vai ser mandada para meu main.jsx 
function Home() {

  // useRef cria uma referência direta ao input no DOM,
  // permitindo acessar o valor digitado sem usar estado
  const inputName = useRef()
  const inputAge = useRef()
  const inputEmail = useRef()

  const navigate = useNavigate()

  //essa função é para criar um novo usuario, eu acesso o back end atraves do endereço dito no api.js e uso o metodo post, criando um novo usuario no meu banco de dados 
  async function registerNewUser() {
    await api.post('/usuarios', {
      email: inputEmail.current.value,

      //usei o parseInt pois quando o usuario fazia o envio de seus dados, a idade chegava como uma String,e o meu back end espera um Int
      age: parseInt(inputAge.current.value),

      name: inputName.current.value
    })


  }

  return (
    <ContainerDefault>
      <TopBackground>

      </TopBackground>

      <Form>
        <Title>Cadastrar Usuário</Title>

        <ContainerInputs>
          <div>
            <Label>Nome<span> *</span></Label>
            <Input typeof='text' placeholder='Nome do usuário' ref={inputName} />
          </div>

          <div>
            <Label>Idade<span> *</span></Label>
            <Input typeof='number' placeholder='Idade do Usuário' ref={inputAge} />
          </div>
        </ContainerInputs>

        <div style={{
          width: '100%'
        }}>
          <Label>
            E-mail <span> *</span>
          </Label>
          <Input typeof='email' placeholder='exemplo@gmail.com' ref={inputEmail} />
        </div>

        <Button type='button' onClick={registerNewUser} theme='primary'>Cadastrar Usuário</Button>
      </Form>
      <Button type='button' onClick={ () => navigate('/lista-de-usuarios')}>Ver Usuários</Button>

    </ContainerDefault>
  )

}

export default Home
