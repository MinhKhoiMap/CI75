import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { AiFillTags } from "react-icons/ai";

const ProductDetail = () => {
  const { productId } = useParams();
  //   const [productData, setProductData] = useState(null);

  useEffect(() => {
    callAPI();
  }, [productId]);
  const [productData, setProductData] = useState(null);

  const callAPI = async () => {
    const res = await fetch(`https://fakestoreapi.com/products/${productId}`);
    const data = await res.json();
    setProductData(data);
  };
  console.log(productData);
  return (
    <>
      {productData && (
        <div className="product-detail__container">
          <figure className="product-detail__img-wrapper">
            <img src={productData.image} />
          </figure>
          <div className="product-detail__details">
            <h3 className="product-detail__title">{productData.title}</h3>
            <p className="product-detail__desc">{productData.description}</p>
          </div>
          <div className="product-detail__category">
            <AiFillTags
              style={{ color: "#ff6666", fontSize: "20px", marginRight: "5px" }}
            />
            Category:
            <span className="product-detail__category-tag">
              {productData.category}
            </span>
          </div>
          <p className="product-detail__price">$ {productData.price}</p>
        </div>
      )}
    </>
  );
};

export default ProductDetail;
