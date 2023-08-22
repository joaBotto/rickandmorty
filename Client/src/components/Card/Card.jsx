import styled, { keyframes } from "styled-components";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { addFav, removeFav } from "../../redux/actions";
import { connect } from "react-redux";
import { useState, useEffect } from "react";

//! ESTRUCTURAS ------------------------------------------------------------------------------

function Card({
  name,
  status,
  species,
  gender,
  origin,
  image,
  id,
  onClose,
  myFavourites,
  removeFav,
  addFav,
}) {
  const { pathname } = useLocation();
  const [isFav, setIsFav] = useState(false);
  useEffect(() => {
    myFavourites.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  }, [myFavourites]);

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      removeFav(id);
    } else {
      setIsFav(true);
      addFav({ name, status, species, gender, origin, image, id });
    }
  };
  return (
    <>
      <DivCard>
        <DivImg>
          {pathname === "/home" && (
            <ButtonClose
              onClick={() => {
                onClose(id);
              }}
            >
              X
            </ButtonClose>
          )}
          {isFav ? (
            <ButtonFav
              title="Click para quitar de favoritos"
              onClick={handleFavorite}
            >
              ❤️
            </ButtonFav>
          ) : (
            <ButtonFav title="Click para favear" onClick={handleFavorite}>
              🤍
            </ButtonFav>
          )}
          {/* {isFav ? null : (
            <ButtonClose title="Click para cerrar" onClick={() => onClose(id)}>
              Close
            </ButtonClose>
          )} */}
          <Img src={image} alt="" />
        </DivImg>
        <DivData>
          <InfoText>
            Species: {species}
            <hr />
            Status: {status}
          </InfoText>
          <Link to={`/detail/${id}`}>
            <Name title="haz click para +info sobre este personaje">
              {name}
            </Name>
          </Link>
          {/* <InfoText title="Genero">{gender}</InfoText> */}
          {/* <InfoText title="Origen">{origin}</InfoText> */}
        </DivData>
      </DivCard>
    </>
  );
}
export const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (character) => {
      dispatch(addFav(character));
    },
    removeFav: (id) => {
      dispatch(removeFav(id));
    },
  };
};
export const mapStateToProps = (state) => {
  return {
    myFavourites: state.myFavourites,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);

//! ESTILOS --------------------------------------------------

// const fadeInAnimation = keyframes`
//   from {
//     opacity: 0;
//     transform: translateY(20px);
//   }
//   to{
//     opacity: 1;
//     transform: translateY(0);
//   }
// `;
const scaleAnimation = keyframes`
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
`;
const DivCard = styled.div`
  border: 3px solid #b5b5b5;
  border-radius: 15px;
  width: 250px;
  height: 350px;
  color: black;
  background-color: #1748;
  margin: 30px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  animation: ${scaleAnimation} 0.3s ease-out;
  &:hover {
    transform: scale(1.1);
    background-color: #174;
  }
`;

const DivData = styled.div`
  text-align: center;
`;
const Name = styled.h2`
  z-index: 1;
  margin: auto;
  position: relative;
  padding: 10px;
  margin-top: 30px;
  font-size: 1rem;
  width: 50%;
  height: 30%;
  background-color: #173;
  color: black;
  border-radius: 15px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  &:hover {
    transform: scaleY(1);
    box-shadow: 10px 10px 10px black;
  }
`;

const InfoText = styled.h4`
  margin-top: 40px;
`;

const DivImg = styled.div`
  position: relative;
  height: 220px;
  padding: 10px;
  margin-top: -12px;
`;

const Img = styled.img`
  width: 100%;
  border-radius: 5px 5px 5px 5px;
  position: relative;
  top: 5px;
`;

const ButtonClose = styled.button`
  margin-top: 5px;
  right: 80px;
  color: balck;
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
const ButtonFav = styled.button`
  margin: 5px;
  right: 80px;
  color: white;
  border: 2px;
  border-radius: 3px;
  background-color: #1749;
  box-shadow: black 5px 5px 5px;
  cursor: pointer;
  &:hover {
    background-color: lightgreen;
    cursor: mouse;
    transition: 0.5s;
  }
`;
