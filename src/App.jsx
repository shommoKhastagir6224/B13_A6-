// import { useState } from 'react'
import Banner from "./Componant/Banner";
import Header from "./Componant/Header";
import Product_Tool from "./Componant/Product_tool/Product_Tool";
import Process from "./Componant/Process";
import Footer from "./Componant/footer/Footer";

const fetchProduct = async () => {
  const res = await fetch("./data.json");
  return res.json();
};

function App() {
  const ProductPromise = fetchProduct();

  return (
    <>
      <Banner />
      <Header />
      <Product_Tool ProductPromise={ProductPromise} />
      <Process />
      <Footer />
    </>
  );
}

export default App;
