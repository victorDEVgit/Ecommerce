import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Topheader from "./components/Topheader";
import Navbar from "./components/Navbar";
import Filter from "./components/filter";
import Banner from "./components/banner";
import Categories from "./components/Categories";
import Footer from "./components/Footer";
import Cart from "./components/Cart";

function App() {
  return (
    <>
      <div>
        <Topheader />
        <Cart />
        <Navbar />
        <Filter />
        <Banner />
        <Categories />
        <Footer />
      </div>
    </>
  );
}

export default App;
