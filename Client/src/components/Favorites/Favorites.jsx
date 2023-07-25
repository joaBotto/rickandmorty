import { connect } from "react-redux";
import Card from "../Card/Card";
import React from "react";
import { styled } from "styled-components";
const CardsContainer = styled.div`
  display: flex;
  flex-wrap: no-wrap;
  justify-content: center;
`;
// const Name = styled.h1`
//   font-size: 1.2rem;
//   padding: 0.6rem;
//   background-color: #1749;
//   color: black;
//   height: 20px;
// `;

const Favourites = ({ myFavourites }) => {
  return (
    <CardsContainer>
      {myFavourites.map((char) => {
        return (
          <Card
            key={char.id}
            id={char.id}
            name={char.name}
            status={char.status}
            species={char.species}
            gender={char.gender}
            origin={char.origin?.name}
            image={char.image}
            onClose={char.onClose}
          />
        );
      })}
    </CardsContainer>
  );
};
const mapStateToProps = (state) => {
  return {
    myFavourites: state.myFavourites,
  };
};

export default connect(mapStateToProps)(Favourites);
