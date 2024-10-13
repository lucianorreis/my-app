import React from "react";
import Navbar from './components/Navbar/Navbar'


//* Componente em classe é uma classe que herda a classe Component do React,
//* e retorna o HTML dentro do método render()

class App extends React.Component {
  // método responsável por renderizar o conteúdo HTML do nosso componente
  render() {
    return (
     <Navbar />

    );
  }
}

export default App;
