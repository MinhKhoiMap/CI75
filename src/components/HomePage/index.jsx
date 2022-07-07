import React from "react";
import { useState, useEffect } from 'react';
import CallAPIBtn from "../CallAPIBtn";
import Products from "../Products";


import { Puff } from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  const APIUrl = "https://fakestoreapi.com/products";
  const [products, setProducts] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleShowProducts = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(APIUrl);
      const data = await response.json();
      setProducts(data);
      setIsLoading(false);
    } catch {
      toast.error("Oops! Something went wrong. Try reloading your website");
    }
  };
  return (
    <>
      {isLoading && (
        <div className="loading-spinner">
          <Puff color="white" height={70} width={70} />
        </div>
      )}
      {products ? (
        <Products productList={products} />
      ) : (
        <CallAPIBtn func={handleShowProducts} />
      )}
      <ToastContainer autoClose={false} />
    </>
  );
};

export default Home;
