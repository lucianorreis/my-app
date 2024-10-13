import React from "react";

import { Navbar } from "./components/Navbar/Navbar";
import { Article } from "./components/Article/Article";

import "./styles/App.css";

//* Componente em classe é uma classe que herda a classe Component do React,
//* e retorna o HTML dentro do método render()

class App extends React.Component {
  // método responsável por renderizar o conteúdo HTML do nosso componente
  render() {
    return (
      <>
        <Navbar />

        {/* <section id="articles">
          <Article
            title="Designing Dashboards"
            provider="NASA"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
            delectus enim voluptas quos cupiditate quod tempore debitis dolore
            incidunt sint quam nihil asperiores, ex est impedit facilis non
            temporibus fugit!"
          />
          <Article
            title="Vibrant portraits of 2020"
            provider="SpaceNews"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
            delectus enim voluptas quos cupiditate quod tempore debitis dolore
            incidunt sint quam nihil asperiores, ex est impedit facilis non
            temporibus fugit!"
          />
          <Article
            title="36 Days of Malayalam type"
            provider="SpaceFlight Now"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
            delectus enim voluptas quos cupiditate quod tempore debitis dolore
            incidunt sint quam nihil asperiores, ex est impedit facilis non
            temporibus fugit!"
          />
          <Article 
          title="Designing Dashboards"
          provider="NASA"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
          delectus enim voluptas quos cupiditate quod tempore debitis dolore
          incidunt sint quam nihil asperiores, ex est impedit facilis non
          temporibus fugit!"/>
        </section> */}
      </>
    );
  }
}

export default App;
