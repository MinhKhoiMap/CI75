import React from 'react'
import './Product.css'

const Product = ({data, id}) => {
  return (
    <div className="product__wrapper" key={id}>
        <div className="product__right">
            <div className="product__info">
              <h2 className="product__title">{data['title']}</h2>
              <p className="product__desc">{data['description']}</p>
              <div className="product__tags">
                Tags: 
                <span className="product__category">{data['category']}</span>
              </div>
            </div>
            <p className="product__price">${data['price']}</p>
        </div>
        <div className="product__left">
            <figure className="product__img-wrapper">
              <img src={data['image']} alt={data['title']} />
            </figure>
        </div>
    </div>
  )
}

export default Product