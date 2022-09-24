import React from "react";
import "./article.css";

const Article = ({ imgurl, date, title }) => {
  return (
    <div className="gpt3__blog-container_article">
      <div className="gpt3__blog-container_articel-image">
        <img src={imgurl} alt="images" />
      </div>
      <div className="gpt3__blog-container_articel-content">
        <div>
          <p>{date}</p>
          <h3>{title}</h3>
        </div>
        <p>Read Full Article</p>
      </div>
    </div>
  );
};

export default Article;
