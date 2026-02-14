import styled from "styled-components"

export const Button = styled.button`
   color: white;
   width: fit-content;
   margin-bottom: 10px;
   height: 35px;
   padding: 15px 20px;
   background: ${props => props.theme === 'primary' ? 'linear-gradient(to right, #fe7e5d, #7f3841 )' : 'rgba(255, 255, 255, 0.3)'} ;
   border-radius: 15px;
   display: flex;
   align-items: center;
   justify-content: center;
   font-weight: bold;
   outline: none;
   border: ${ props => props.theme === 'primary' ? 'none' : '1px solid black'} ;

   &:hover{
    opacity:  0.8;
    background: ${ props => props.theme != 'primary' ? 'rgba(255, 255, 255, 0.2)' : ''};
   }
   &:active{
    opacity: 0.5;
   }
`