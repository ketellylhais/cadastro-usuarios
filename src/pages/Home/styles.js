import styled from 'styled-components' //styled é uma biblioteca de estilização




export const Form = styled.div`
    color: white;
    display: flex;
    gap: 25px;
    flex-direction: column;
    align-items: center;
`
export const ContainerInputs = styled.div`
    display: flex;
    gap: 20px;
`
export const Label = styled.label`
    color: #fff;
    font-size: 12px;
    font-weight: 500;

    span{
        color: #ef4f45;
    }
`

export const Input = styled.input`
    color: black;
    border-radius: 10px;
    border: 1px solid #d2dae2;
    background-color: #fff;
    padding: 12px 20px;
    outline: none;
    width: 100%;
    height: 40px;
`



export const Title = styled.h2`
    display: flex;
    justify-content: center;
    font-style: normal;
    font-weight: bolder;
    font-size: 32px;
`