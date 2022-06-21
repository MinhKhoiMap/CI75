import React from 'react'
import './assets/css/ContentSection.css'

const ContentSection = ({title, text, imgSrc}) => {
  return (
    <div className="main__content">
      <div className="content__paragraph">
        <h3 className="content__paragraph-title">{title}</h3>
        <p className="content__paragraph-text">{text}</p>
      </div>
      <figure className="content__img-wrapper">
        <img src={imgSrc} className="content__img" />
      </figure>
    </div>
  );
}

export default ContentSection