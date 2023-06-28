import SearchBar from "../SearchBar/SearchBar";
import styled from 'styled-components';
import { Link } from "react-router-dom";

const NavPrincipal = styled.nav`
  width:700px;
  height:40px;
  margin-left:300px;
  background-color: none;
`;
const ButtonClose = styled.button`
  margin: 10px;
  margin-top: 4px;
  margin-right:50px;
  color: black;
  border:0;
  border-radius: 3px;
  background-color: MediumPurple;
  box-shadow: black 5px 5px 5px;
  cursor: pointer;
  height: 25px;
  width:80px;
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
export default function Nav({onSearch}){
  return (
    <NavPrincipal>

      <Link to='/home'><ButtonClose>Home</ButtonClose></Link>
      <Link to='/about'><ButtonClose>About</ButtonClose></Link>
      <Link to='/form'><ButtonClose>Form</ButtonClose></Link>
      <Link to='/favorites'><ButtonClose>Favourites</ButtonClose></Link>
      <Link to="/"><ButtonClose>Back</ButtonClose></Link>
      <SearchBar onSearch={onSearch} />

    </NavPrincipal>
  )
}
