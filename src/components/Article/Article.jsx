import React from "react";

import articleImg from '../../assets/Article.png'

import './styles.css'

export function Article(props){
    return (
      <article id="article">
        <img src={articleImg} alt="" />

        <div className="article-infos">
          <h2>{props.title}</h2>
          <h3>{props.provider}</h3>

          <p>{props.description}</p>
        </div>
      </article>
    );
  }
