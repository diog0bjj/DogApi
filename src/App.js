import React, {useState, useEffect} from 'react'
import axios from 'axios';
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
}`

const FunPage = styled.div`
wdith:100vw;
height:100vh;
display:Flex;
justify-content:space-evenly;
align-items:center;
background-image:url('https://img.freepik.com/fotos-gratis/vista-frontal-de-um-lindo-cachorro-com-espaco-de-copia_23-2148786561.jpg?w=2000');
background-size:cover;
background-position:center right;
flex-wrap:wrap;

@media(max-width: 600px) {
  flex-direction: column;
}`

const DogImage = styled.img`
width:19rem;
height:19rem;
border:solid black;`

const FunButton = styled.button`
height:2rem;
padding:0.3rem;
border-radius:10px;
border:Solid black;
border-width:thin;
background-color:red;
color:white;
text-size:large;

&:hover{
  transform: scale(1.2);
}`

export default function App() {

  const [image, setImage] = useState();
  const [modal, setModal] = useState(false)

  useEffect(()=>{
    modal ? document.title='Have Fun :)' : document.title='Don`t be Sad :('
  }, [modal])

  useEffect(()=>{document.title='Testando a DogApi'}, [])

  const Api =()=>{setInterval(()=>{axios.get(`https://dog.ceo/api/breeds/image/random`).then((response)=>{
    setImage(response.data.message)
  })}, 2000)
  setModal(!modal)
};


const Images =()=>{
  return(
    <>
      <DogImage src={image} alt="imagens fofinhas de cachorro"/>
    </>
  )
}
  return (
    <>
    <GlobalStyle/>
    <FunPage>
      <FunButton onClick={()=>{Api()}}>{modal ? 'I`m Happy now': 'Having a bad day? click here and enjoy it!!'}</FunButton>
      { modal &&  Images() }
    </FunPage>
    </>
  );
}

