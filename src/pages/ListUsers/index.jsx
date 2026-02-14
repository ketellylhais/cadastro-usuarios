import api from '../../services/api'
import { useEffect, useState } from 'react'
import Button from '../../components/Button'
import ContainerDefault from '../../components/Container'
import TopBackground from '../../components/TopBackground'
import Trash from '../../assets/trash.svg'
import { useNavigate } from 'react-router-dom'

import {Title, ContainerUsers, CardUsers, TrashIcon, AvatarUser} from './styles.js'


function ListUsers() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        async function getUsers() {
            const { data } = await api.get('/usuarios')

            setUsers(data)
        }
        getUsers()

    }, [])

    async function deleteUsers(id) {
        await api.delete(`/usuarios/${id}`)
        
        const updaterUser = users.filter( user => user.id !== id)
        setUsers(updaterUser)
    }


    const navigate = useNavigate()
    return (
        <ContainerDefault>

            <TopBackground>

            </TopBackground>
            <Title>Lista de Usuários</Title>
            <ContainerUsers>
                {users.map((user) => (
                    <CardUsers key={user.id}>
                      <  AvatarUser src={'https://ui-avatars.com/api/?name=' + user.name}/>
                        <div>
                            <h3>{user.name}</h3>
                            <p>{user.age} anos</p>
                            <p>{user.email}</p>
                        </div>
                       <TrashIcon src={Trash} alt='icone' onClick={() => deleteUsers(user.id)}/>
                    </CardUsers>
                ))}
            </ContainerUsers>

            <Button type='button' onClick={() => navigate('/')} >Voltar</Button>
        </ContainerDefault>
    )
}

export default ListUsers