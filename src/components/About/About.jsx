import styled from 'styled-components';

const Div = styled.div`
  width:100%;
  height:100%;
  margin-top:30px;
  background-color:MediumPurple;
`;
export default function About() {

  return (
    <Div>
      <p>This app was created using Javascript, CSS, React y Redux, continue in process of development, but is a prototype of the final app. The creator of this app is Joaquin Botto, student of soyHenry in the Web Developer Full Stack career. 
      </p>
      <p>
        Esta es una aplicacion creada utilizando Javascript, HTML, CSS, React y Redux, desarrollada por Joaquin Botto, actualmente en la carrera de Desarrollo Web Full Stack...
      </p>
    </Div>
  )
}