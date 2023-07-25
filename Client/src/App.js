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

  function login({ email, password }) {
    axios(`${URL}login?email=${email}&password=${password}`).then(
      ({ data }) => {
        const { access } = data;
        setAccess(access);
        access && navigate("/home");
      }
    );
  }
  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  function onSearch(id) {
    if (!id) alert("Ingresa un ID");
    if (characters.find((char) => char.id === parseInt(id))) {
      alert(`Ya existe el personaje con el id ${id}`);
      return;
    }
    axios(`https://rickandmortyapi.com/api/character/${id}`)
      .then(({ data }) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        }
      })
      .catch((error) => alert(error.response.data.error));
  }
  function onClose(id) {
    setCharacters(characters.filter((character) => character.id !== id));
  }

  const location = useLocation();

  return (
    <>
      {location.pathname !== "/" && <Nav onSearch={onSearch} />}
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/form" element={<Form />} login={login} />
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
