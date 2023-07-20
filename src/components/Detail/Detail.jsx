import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { styled } from "styled-components";
import { Link } from "react-router-dom";
export default function Detail() {
  const { id } = useParams();

  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios(`http://localhost:3001/rickandmorty/character/${id}`)
      .then(({ data }) => {
        if (data.name) {
          setCharacter(data);
          console.log(data);
        }
      })
      .catch((error) => window.alert(error.response.data.error));

    return setCharacter({});
  }, [id]);

  return (
    <DivCard>
      <Link to="/home">
        <ButtonBack>Back</ButtonBack>
      </Link>
      {character.name && (
        <>
          <Info>Name: {character.name}</Info>
          <p>Status: {character.status}</p>
          <p>Species: {character.species}</p>
          <p>Gender: {character.gender}</p>
          <p>Origen: {character.origin?.name}</p>
          <Img src={character.image} alt="image" />
        </>
      )}
    </DivCard>
  );
}
const ButtonBack = styled.button`
  margin-bottom: 30px;
  color: black;
  border: 0;
  border-radius: 3px;
  background-color: #1749;
  box-shadow: black 5px 5px 5px;
  cursor: pointer;
  height: 25px;
  width: 45px;
  &:hover {
    background-color: lightgreen;
    cursor: mouse;
    transition: 0.5s;
  }
`;
const DivCard = styled.div`
  border: 3px solid #b5b5b5;
  border-radius: 15px;
  width: 250px;
  height: 450px;
  color: #173;
  background-color: #161626;
  margin: auto;
  margin-top: 10px;
  padding: 25px;
`;
const Info = styled.h1`
  font-size: 1.8rem;
  margin-top: -10px;
  line-height: 0.7em;
`;
const Img = styled.img`
  width: 85%;
  border-radius: 10px;
  margin-left: 17px;
  margin-top: -15px;
`;
