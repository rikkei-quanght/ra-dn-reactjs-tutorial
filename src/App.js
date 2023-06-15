import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Product from "./components/Product";
import ProductDetail from "./components/ProductDetail";
import About from "./components/About";
import AboutRikkeiAcademy from "./components/AboutRikkeiAcademy";
import AboutRikkeisoft from "./components/AboutRikkeisoft";
import NotFound from "./components/NotFound";

export default class App extends React.Component {
  render() {
    const routes = (<Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />}>
        {/* <Route index element={<About/>}/> */}
        <Route path="rikkei-academy" element={<AboutRikkeiAcademy />} />
        <Route path="rikkei-soft" element={<AboutRikkeisoft />} />
      </Route>
      <Route path="/product" element={<Product />} />
      {/* Path variable */}
      <Route path="/product/:id" element={<ProductDetail />} />
      <Route path="*" element={<NotFound />} />
    </Routes>);


    return (
      <>
        {routes}
      </>
    );
  }
}
