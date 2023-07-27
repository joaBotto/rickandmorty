import SearchBar from "../SearchBar/SearchBar";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavPrincipal = styled.nav`
  width: 800px;
  height: 40px;
  margin-left: 10%;
  border-radius: 10px;
  background-color: #161626;
`;
const ButtonClose = styled.button`
  margin: 20px;
  margin-top: 4px;
  margin-right: 60px;
  color: black;
  border: 0;
  border-radius: 3px;
  background-color: #1749;
  box-shadow: lightgreen 5px 5px 5px;
  cursor: pointer;
  height: 25px;
  width: 10%;
  &:hover {
    background-color: lightblue;
    cursor: pointer;
    height: 20px;
    transition: 0.5s;
    box-shadow: none;
  }
  &:active {
    background-color: #6b6e6f;
    transition: none;
  }
`;
export default function Nav({ onSearch }) {
  return (
    <NavPrincipal>
      <Link to="/home">
        <ButtonClose>Home</ButtonClose>
      </Link>
      <Link to="/about">
        <ButtonClose>About</ButtonClose>
      </Link>
      <Link to="/form">
        <ButtonClose>Register</ButtonClose>
      </Link>
      <Link to="/favorites">
        <ButtonClose>Favourites</ButtonClose>
      </Link>
      <Link to="/">
        <ButtonClose>Log Out</ButtonClose>
      </Link>
      <SearchBar onSearch={onSearch} />
    </NavPrincipal>
  );
}
