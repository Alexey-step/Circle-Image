import React from "react";
import ColoredUserpic from "../colored-userpic/colored-userpic";
import { Container } from "./app.styles";

const App = () => {
  return (
    <Container>
      <ColoredUserpic
        src="https://via.placeholder.com/300x300/000000/FFFFFF?text=image"
        size={150}
        margin={4}
        backgroundColor='red'
        colors={['green', 'blue']}
        hoverColors={['blue', 'green']}
        colorWidth={6}
 />
    </Container>
  );
}

export default App;
