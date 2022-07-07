import ProductItem from "./ProductItem";

const Products = (props) => {
  const { productList } = props;
  return (
    <ul className="product-list">
      {productList.map((product) => (
        <ProductItem key={product.id}
          title={product.title}
          price={product.price}
          description={product.description}
          category={product.category}
          imgURL={product.image}
          id={product.id}
        />
      ))}
    </ul>
  );
};

export default Products;
