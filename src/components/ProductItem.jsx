import {AiFillTags} from 'react-icons/ai'

const ProductItem = ({ keyValue, imgURL, title, description, price, category }) => {
    return (
        <li className="product-item">
            <figure className="product-item__img-wrapper">
                <img src={imgURL}/>
            </figure>
            <div className="product-item__details">
                <h3 className="product-item__title">{title}</h3>
                <p className="product-item__desc">{description}</p>
            </div>
            <div className="product-item__category">
                <AiFillTags style={{color: '#ff6666', fontSize: '20px', marginRight: '5px'}} />
                Category: 
                <span className="product-item__category-tag">{category}</span>
            </div>
            <p className="product-item__price">$ {price}</p>
        </li>
    )
}

export default ProductItem