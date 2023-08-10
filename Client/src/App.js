import "./App.css";
import Cards from "./components/Cards/Cards";
import Nav from "./components/Nav/Nav";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import Form from "./components/Form/Form";
import Favorites from "./components/Favorites/Favorites";
import Welcome from "./components/Welcome/Welcome";
import axios from "axios";
import { useState, useEffect } from "react";
import {
  Routes,
  Route,
  useLocation,
  // Navigate,
  useNavigate,
} from "react-router-dom";

function App() {
  const navigate = useNavigate();
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);

  const URL = "http://localhost:3001/rickandmorty/";

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  const login = async ({ email, password }) => {
    try {
      const { data } = await axios(
        `${URL}login?email=${email}&password=${password}`
      );
      const { access } = data;
      console.log(access);
      setAccess(access);
      if (access) {
        navigate("/home");
      } else {
        navigate("/form");
      }
    } catch (error) {
      window.alert(error.message);
    }
  };

  const onSearch = async (id) => {
    try {
      if (!id) alert("Ingresa un ID");
      if (characters.find((char) => char.id === parseInt(id))) {
        alert(`Ya existe el personaje con el id ${id}`);
        return;
      }
      const { data } = await axios(
        `https://rickandmortyapi.com/api/character/${id}`
      );
      if (data.name) {
        setCharacters((oldChars) => [...oldChars, data]);
      }
    } catch (error) {
      window.alert(error.response.data.error);
    }
  };
  function onClose(id) {
    setCharacters(characters.filter((character) => character.id !== id));
  }

  const location = useLocation();

  return (
    <>
      {location.pathname !== "/" && <Nav onSearch={onSearch} />}
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/form" element={<Form login={login} />} />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </>
  );
}

export default App;
