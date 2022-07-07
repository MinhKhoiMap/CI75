import { Link } from "react-router-dom";
import { AiFillTags } from "react-icons/ai";

const ProductItem = ({
  id,
  imgURL,
  title,
  description,
  price,
  category,
}) => {
  return (
    <li className="product-item">
      <Link to={`${id}`} className="product-item-link">
        <figure className="product-item__img-wrapper">
          <img src={imgURL} />
        </figure>
        <div className="product-item__details">
          <h3 className="product-item__title">{title}</h3>
          <p className="product-item__desc">{description}</p>
        </div>
        <div className="product-item__category">
          <AiFillTags
            style={{ color: "#ff6666", fontSize: "20px", marginRight: "5px" }}
          />
          Category:
          <span className="product-item__category-tag">{category}</span>
        </div>
        <p className="product-item__price">$ {price}</p>
      </Link>
    </li>
  );
};

export default ProductItem;
