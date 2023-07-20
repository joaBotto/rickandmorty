import React from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { keyframes } from "styled-components";
const fadeInAnimation = keyframes`
  from {
    opacity: 0;
    transform: (20px);
  }
  to{
    opacity: 1;
    transform: translate(0);
  }
  0%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
`;
const Title = styled.h1`
  font-family: Kablammo;
  font-size: 30px;
  display: flex;
  justify-content: center;
  animation: ${fadeInAnimation} 0.3s ease-out;
`;

const DivText = styled.div`
  width: 400px;
  display: flex;
  margin: auto;
  margin-top: 20px;
  background-color: #1579;
  animation: ${fadeInAnimation} 0.3s ease-out;
`;

const SecondTitle = styled.h4`
  font-size: 0.8em;
  text-align: center;
  animation: ${fadeInAnimation} 0.3s ease-out;
`;

const Developed = styled.footer`
  text-align: center;
  background: #282c34;
  animation: ${fadeInAnimation} 0.3s ease-out;
  margin-top: 10px;
`;

const ButtonInit = styled.button`
  margin-left: 500px;
  margin-top: 145px;
  right: 80px;
  color: lightgreen;
  font-size: 2.2em;
  border: 0;
  border-radius: 50px;
  background-color: #1579;
  box-shadow: black 5px 5px 5px;
  cursor: pointer;
  height: 200px;
  width: 300px;
  animation: 0.3s ease-out forwards;
  &:hover {
    background-color: #1879;
    cursor: mouse;
    transition: 0.5s;
  }
  animation: ${fadeInAnimation} 0.2s ease-out;
`;

const Welcome = () => {
  return (
    <>
      <Title>Welcome to the Rick And Morty App</Title>
      <DivText>
        <SecondTitle>
          In this application you will find a completely fun world in which you
          can immerse yourself in the exciting adventure of learning about the
          different characters from the Rick And Morty series.
        </SecondTitle>
      </DivText>
      <Link to="/form">
        <ButtonInit>Start experience</ButtonInit>
      </Link>
      <Developed>Developed By: Botto Joaquin</Developed>
    </>
  );
};

export default Welcome;
