import React from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

const Title = styled.h1`
  font-family:Kablammo;
  font-size:30px;
  color:#209;
`

const Welcome = () => {
  return (
    <>
      <Title>Welcome to the Rick And Morty App</Title>
      <h4>In this application you will find a completely fun world in which you can immerse yourself in the exciting adventure of learning about the different characters from the Rick And Morty series.</h4>
      <p>Developed By: Botto Joaquin</p>
      <Link to="/form"><button>Start experience</button></Link>
    </> 
  )
}

export default Welcome;