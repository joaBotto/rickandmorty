import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { styled } from "styled-components";

export default function Detail() {
  const { id } = useParams();

  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`)
      .then(({ data }) => {
         if (data.name) {
           setCharacter(data);
           console.log(data);
        }
      })
      .catch (error => window.alert(error.response.data.error))

    return setCharacter({});
 }, [id]);

  return (
    <DivCard>
      {character.name && (
        <>
          <Info>{character.name}</Info>
          <p>{character.status}</p>
          <p>{character.species}</p>
          <p>{character.gender}</p>
          <p>{character.origin?.name}</p>
          <Img src={character.image} alt="image"/>
        </>
      )}
    </DivCard>
  )
}
const DivCard = styled.div`
  border: 3px solid #b5b5b5;
  overflow:auto;
  border-radius: 15px;
  width: 250px;
  height:500px;
  color: MediumPurple;
  background-color: #161626; 
  margin: 3px;
  padding:10px;
`;
const Info = styled.h1`
  font-size: 15pt;
  line-height: .7em;
`;
const Img = styled.img`
    width: 100%;
    border-radius: 5px 5px 0 0;
    position: relative;
    top: 3px;
`;