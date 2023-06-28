import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';

const SearchContainer = styled.div`
  width:150px;
  margin-top:-38px;
  margin-left:-200px;
`;

const SearchInput = styled.input`
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
  font-size: 1.2rem;
  width:85px;
  height:20px;
  background-color: #161626;
  color:white;
  margin:5px;
`;

const ButtonAdd = styled.button`
   color: black;
   border:2px;
   border-radius: 3px;
   background-color: MediumPurple;
   box-shadow: black 1px 1px 5px;
   cursor: pointer;
   height: 20px;
   &:hover {
    background-color:lightgreen;
    cursor:pointer;
    transition: 0.5s;
  }
  &:active {
    background-color:#6b6e6f;
    transition:none;
  }
`;


export default function SearchBar({ onSearch }) {
  
  const [id, setId] = useState('');
  function handleChange(event) {
    setId(event.target.value);
  }
   return (
      <SearchContainer className={styled.container}>
       <SearchInput
         className={styled.input}
         type='search' value={id}
         onChange={handleChange}
         placeholder='Num'
       />
       <ButtonAdd
         className={styled.button}
         onClick={() => onSearch(id)}>Add
       </ButtonAdd>
      </SearchContainer>
   );
}
