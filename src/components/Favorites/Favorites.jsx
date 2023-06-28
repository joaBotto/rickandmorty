import { connect } from "react-redux";
import Card from "../Card/Card";
import React from "react";
import { styled } from "styled-components";

const CardsContainer = styled.div`
display:flex;
flex-wrap:no-wrap;
justify-content:center;
`;
const Name = styled.h1`
  font-size: 1.2rem;
  padding: .6rem;
  background-color: MediumPurple;
  color:black;
  height:20px;
  `;

const Favourites = ({ myFavourites }) => {
  
  return (
    <CardsContainer>
      <Name>Favs:</Name>

      {myFavourites?.map(
        ({
          key,
          id,
          name,
          species,
          image,
          gender,
        }) => {
          return(
            <Card
              key={key}
              id={id}
              name={name}
              species={species}
              image={image}
              gender={gender}
            />
          )
        }
      )}
    </CardsContainer>
  )
}
const mapStateToProps = (state) => {
  return {
    myFavourites: state.myFavourites,
  }
}

export default connect(mapStateToProps,null)(Favourites);
