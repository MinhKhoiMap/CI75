import ProductItem from "./ProductItem";

const Products = (props) => {
    const { productList } = props;
    return (
        <ul className="product-list">
            {productList.map((product) => (
                <ProductItem
                    title={product.title}
                    price={product.price}
                    description={product.description}
                    category={product.category}
                    imgURL={product.image}
                    key={product.id}
                />
            ))}
        </ul>
    );
}

export default Products;