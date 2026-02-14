import styled from 'styled-components'

export const Title = styled.h2`
    display: flex;
    color: #fff;
    justify-content: center;
    font-style: normal;
    font-weight: bolder;
    font-size: 32px;
    margin-top: 20px;
    `

export const ContainerUsers = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    margin: 30px 0;

    @media (max-width: 750px) {
        grid-template-columns: 1fr;
    }
`


export const CardUsers = styled.div`
    background-color: #252d48;
    padding: 16px;
    border-radius: 32px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    max-width: 380px;
    flex-wrap: wrap;

    h3{
        color: #fff;
        font-size: 24px;
        text-transform: capitalize;
    }
    p{
        font-size: 12px;
        color: #fff;
    }
`

export const TrashIcon = styled.img`
    cursor: pointer;
    padding-left: 30px;

    &:hover{
        opacity: 0.8;
    }
    &:active{
        opacity: 0.5;
    }
`

export const AvatarUser = styled.img`
    height: 80px;
    border-radius: 50%;
`