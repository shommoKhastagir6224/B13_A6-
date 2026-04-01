import { Suspense } from 'react'
import Banner from "./Componant/Banner";
import Header from "./Componant/Header";
import Product_Tool from "./Componant/Product_tool/Product_Tool";
import Process from "./Componant/Process";
import Offer from "./Componant/offer";
import { ToastContainer } from "react-toastify";
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

      <Suspense
        fallback={<span className="loading loading-dots loading-xl"></span>}
      >
        <Product_Tool ProductPromise={ProductPromise} />
      </Suspense>
      <ToastContainer />
      <Process />
      <Offer />
      <Footer />
    </>
  );
}

export default App;
