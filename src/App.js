import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import ProductDetail from "./components/ProductDetail";
import Home from "./components/HomePage";
import Header from "./components/Header";
import ToTopBtn from "./components/ToTopBtn";

function App() {
  const [visible, setVisible] = useState(false);

  const handleScroll = () => {
    if (document.documentElement.scrollTop > 0) setVisible(true);
    else setVisible(false);
  };

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path=":productId" element={<ProductDetail />} />
        </Routes>
      </BrowserRouter>
      {visible && <ToTopBtn handleToTop={handleScrollToTop}/>}
    </>
  );
}

export default App;
