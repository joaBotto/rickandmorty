import styled from 'styled-components';
import { useState } from 'react';
import style from "./Form.module.css";
import { Link } from 'react-router-dom';
const regEx = /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{3})+$/;
const StyledForm = styled.div`
  background-color:#f2f2f2;
  margin: auto;
  margin-top:30px;
  padding: 25px;
  width:300px;
  height:150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: Calibri, sans-serif;
  font-size: 16px;
  font-weight: bold;
  outline: none;
  border: 3px solid lightgreen;
  box-shadow: 7px 7px 5px lightgreen;
  border-radius: 10px;
  `;
  
const Input = styled.input`
  width:170px;
  background-color: MediumPurple;
  color: black;
  border: none;
  padding: 10px 15px 5px;
  cursor: pointer;
    
  &:hover {
    background-color: lightgreen;
    cursor:mouse;
    width:180px;
    transition: 0.5s;
  }
  &:focus {
    outline: none;
    width:200px;
  }
  &:active{
    background-color:#6b6e6f ;
  }
`;

const Button = styled.button`
  width:50px;
  height:20px;
  background-color: MediumPurple;
  color: black;
  border: none;
  cursor: pointer;
    
  &:hover {
    background-color:lightgreen;
    cursor:pointer;
    width:70px;
    transition: 0.5s;
  }
  &:focus {
    outline: none;
    transition:0.5s ease all;
    width:70px;
  }
  &:active {
    background-color:#6b6e6f;
    width:50px;
  }
  `;

const ButtonBack = styled.button`
  width:50px;
  height:20px;
  border:none;
  background-color: MediumPurple;
  color: black;
  cursor: pointer;

  &:hover {
    background-color:lightgreen;
    cursor:pointer;
    width:70px;
    transition: 0.5s;
  }
  &:focus {
    outline: none;
    transition:0.5s ease all;
    width:70px;
  }
  &:active {
    background-color:#6b6e6f;
    width:50px;
  }
  `;

const validate = (userData, setErrors, errors)=> { 
  if (!userData.email) setErrors({ ...errors, email: "El email no puede estar vacio" });
  else {
    if (regEx.test(userData.email)) setErrors({ ...errors, email: "" })
    else setErrors({ ...errors, email: "Email invalido" });
  }

};

export default function Form() {

  const [userData, setData] = useState({
    email: "",
    password:"",
  });

  const [errors, setErrors] = useState({
   email: "",
   password: "",
  });


  const submitHandler = (event) => {
    event.preventDefault();
  };
    
  const handleChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    setData({ ...userData, [property]: value });
    validate({ ...userData, [property]: value }, setErrors, errors);
  }

  
  return (
    <StyledForm onSubmit={submitHandler}>
      <label htmlFor="email">Email:</label><br/>
      <Input 
        type='text'
        name='email'
        placeholder="Your email"
        value={userData.email}
        onChange={handleChange}
        className={errors.email ? style.miss : style.success}
      />
      <span>{ errors.email }</span>
      <label htmlFor="password">Password:</label>
      <Input
        type='password'
        name='password'
        placeholder='Your password'
        value={userData.password}
        onChange={handleChange}
      /><br/>
      <Link to="/home"><Button type='submit' name="button">Log In</Button></Link>
      <br/>
      <Link to="/home"><ButtonBack>Back</ButtonBack></Link>
    </StyledForm>
  )
}