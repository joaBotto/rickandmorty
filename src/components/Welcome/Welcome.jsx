import React from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

const Title = styled.h1`
  font-family:Kablammo;
  font-size:30px;
  color:white;
  display:flex;
  justify-content:center;
`

const DivText = styled.div`
  width:300px;
  display:flex;
  margin-left:34%;
`;

const SecondTitle = styled.h4`
  margin-left:100px;
  color:lightyellow;
  text-align: center;
`;

const Developed = styled.footer`
  text-align:center;
  background:#282c34;
`;

const ButtonInit = styled.button`
  margin-left:570px;
`;

const Welcome = () => {
  return (
    <>
      <Title>Welcome to the Rick And Morty App</Title>
      <DivText>
        <SecondTitle>In this application you will find a completely fun world in which you can immerse yourself in the exciting adventure of learning about the different characters from the Rick And Morty series.
        </SecondTitle>
      </DivText>
      <Developed>Developed By: Botto Joaquin</Developed>
      <Link to="/form"><ButtonInit>Start experience</ButtonInit></Link>
    </> 
  )
}

export default Welcome;