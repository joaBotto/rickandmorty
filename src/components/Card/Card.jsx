import styled, {keyframes} from 'styled-components';
import React from 'react';
import { Link } from 'react-router-dom';
import { addFav, removeFav } from '../../redux/actions';
import { connect } from 'react-redux';
import { useState, useEffect } from 'react';

//! ESTRUCTURAS ------------------------------------------------------------------------------

function Card({ name, status, species, gender, origin, image, id, onClose, myFavourites, removeFav, addFav }) {
  
  useEffect(() => {
      myFavourites.forEach((fav) => {
        if (fav.id === id) {
            setIsFav(true);
        }
    });
  }, [myFavourites,id]);
  
  
  const [isFav, setIsFav] = useState(false);
  
  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false)
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
            {isFav ? (<ButtonFav title="Click para quitar de favoritos" onClick={handleFavorite}>❤️</ButtonFav>) : (<ButtonFav title="Click para favear" onClick={handleFavorite}>🤍</ButtonFav>)}
            {isFav ? null : (<ButtonClose title="Click para cerrar" onClick={() => onClose(id)}>Close</ButtonClose>)}
            <Img src={image} alt='' />
         </DivImg>  
         <DivData>
          <InfoText>Species: {species}<hr/>Status: {status}</InfoText>
            <Link to={`/detail/${id}`}><Name title="haz click para +info sobre este personaje">{name}</Name></Link>
            {/* <InfoText title="Genero">{gender}</InfoText> */}
            {/* <InfoText title="Origen">{origin}</InfoText> */}
        </DivData>
      </DivCard>
    </>
    
  );
}
export const mapStateToProps = (state) => {
  return {
    myFavourites: state.myFavourites,
  }
}
export const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (character) => {
      dispatch(addFav(character))
    },
    removeFav: (id) => {
      dispatch(removeFav(id));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);

  //! ESTILOS --------------------------------------------------

const fadeInAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to{
    opacity: 1;
    transform: translateY(0);
  }
`;
const DivCard = styled.div`
    border: 3px solid #b5b5b5;
    border-radius: 15px;
    width: 250px;
    height:350px;
    color: MediumPurple;
    background-color: #161626; 
    margin: 5px ;
    animation: ${fadeInAnimation} 0.5s ease-out forwards;
`;

const DivData = styled.div`
  text-align: center;
`;
const Name = styled.h2`
  z-index:1;
  margin:auto;
  position:relative;
  padding:10px;
  margin-top:30px;
  font-size: 1rem;
  width: 50%;
  height:30%;
  background-color: MediumPurple;
  color:black;
  border-radius:15px;
`;

const InfoText = styled.h4`
  margin-top: 40px;
`;

const DivImg = styled.div`
    position:relative;
    height:220px;
    padding:10px;
    margin-top:-12px;
`;

const Img = styled.img`
    width: 100%;
    border-radius: 5px 5px 5px 5px;
    position: relative;
    top: 5px;
`;

const ButtonClose = styled.button`
  margin-top: 5px;
  right:80px;
  color: balck;
  border:0;
  border-radius: 3px;
  background-color: MediumPurple;
  box-shadow: black 5px 5px 5px;
  cursor: pointer;
  height: 25px;
  width:45px;
  animation: ${fadeInAnimation} 0.3s ease-out forwards;
  &:hover{
    background-color: lightgreen;
    cursor:mouse;
    transition: 0.5s;
  }
`;
const ButtonFav = styled.button`
  margin: 5px;
  right:80px;
  color: white;
  border:2px;
  border-radius: 3px;
  background-color: MediumPurple;
  box-shadow: black 5px 5px 5px;
  cursor: pointer;
`;
