import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { styled } from "styled-components";

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
const DivCard = styled.div`
  border: 3px solid #b5b5b5;
  border-radius: 15px;
  width: 250px;
  height: 400px;
  color: MediumPurple;
  background-color: #161626;
  margin: auto;
  padding: 25px;
`;
const Info = styled.h1`
  font-size: 15pt;
  line-height: 0.7em;
`;
const Img = styled.img`
  width: 85%;
  border-radius: 10px;
  margin-left: 17px;
`;
