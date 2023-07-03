import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import Card from "../Card/Card";
import React from "react";
import { styled } from "styled-components";
import { filterCards, orderCards } from "../../redux/actions";
const CardsContainer = styled.div`
  display: flex;
  flex-wrap: no-wrap;
  justify-content: center;
`;
const Name = styled.h1`
  font-size: 1.2rem;
  padding: 0.6rem;
  background-color: MediumPurple;
  color: black;
  height: 20px;
`;

const Favourites = ({ myFavourites }) => {
  const dispatch = useDispatch();
  const handleClick = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "order":
        return dispatch(orderCards(value));
      case "filter":
        return dispatch(filterCards(value));
      default:
        break;
    }
  };
  return (
    <CardsContainer>
      <div>
        <select name="order" onClick={handleClick}>
          <option value="A">Ascendente</option>
          <option value="D">Descendente</option>
        </select>
        <select
          name="filter"
          onClick={(e) => {
            dispatch(filterCards(e.target.value));
          }}
        >
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">unknown</option>
        </select>
      </div>
      {myFavourites?.map(({ key, id, name, species, image, gender }) => {
        return (
          <Card
            key={key}
            id={id}
            name={name}
            species={species}
            image={image}
            gender={gender}
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

export default connect(mapStateToProps, null)(Favourites);
