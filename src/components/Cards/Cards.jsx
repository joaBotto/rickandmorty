import Card from "../Card/Card";
import React from "react";
import styled from "styled-components";

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: no-wrap;
  justify-content: center;
  margin-top: 10px;
  gap: 10px;
`;
const DivP = styled.div`
  background-color: #1749;
  border-radius: 7px;
  height: 27px;
  display: inline;
  margin-left: 245px;
`;
export default function Cards({ characters, onClose }) {
  return (
    <>
      <DivP>
        You must put a number between 1 and 5 in the search bar of Rick And
        Morty person, after that, click on "Add"
      </DivP>
      <CardsContainer className={styled.container}>
        {characters.map((character) => (
          <Card
            key={character.id}
            id={character.id}
            name={character.name}
            status={character.status}
            species={character.species}
            gender={character.gender}
            origin={character.origin.name}
            image={character.image}
            onClose={onClose}
          />
        ))}
      </CardsContainer>
    </>
  );
}
// export { BackgroundContainer };
