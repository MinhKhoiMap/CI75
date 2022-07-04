import { useState } from 'react';
import './App.css';
import CallAPIBtn from "./components/CallAPIBtn";
import Products from "./components/Products";

import { Puff } from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";


function App() {
  const APIUrl = 'https://fakestoreapi.com/products';
  const [products, setProducts] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleShowProducts = async () => {
    setIsLoading(true);
    const response = await fetch(APIUrl);
    const data = await response.json();
    setProducts(data);
    setIsLoading(false);
  }

  return (
    <>
      {
        isLoading && (
          <div className="loading-spinner">
            <Puff color="white" height={70} width={70}/>
          </div>
        )
      }
      {products ? (<Products productList={products} />) : (<CallAPIBtn func={handleShowProducts} />)}
    </>
  );
}

export default App;
