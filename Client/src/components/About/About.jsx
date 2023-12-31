import styled from "styled-components";

const Div = styled.div`
  width: 400px;
  height: 100%;
  background-color: #1749;
  padding: 2px;
  border-radius: 10px;
  margin: auto;
`;

const Parr = styled.h4`
  border-radius: 10px;
  color: lightyellow;
  text-align: center;
  padding: 10px;
`;
export default function About() {
  return (
    <Div>
      <Parr>
        This app was created using Javascript, CSS, React y Redux, continue in
        process of development, but is a prototype of the final app. The creator
        of this app is Joaquin Botto, student of soyHenry in the Web Developer
        Full Stack career.
      </Parr>
      <Parr>
        Esta es una aplicacion creada utilizando Javascript, HTML, CSS, React y
        Redux, desarrollada por Joaquin Botto, actualmente en la carrera de
        Desarrollo Web Full Stack...
      </Parr>
    </Div>
  );
}
