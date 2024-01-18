import {
  BrowserRouter,
  Route,
  Routes,
  useSearchParams,
} from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import ProductListing from "./pages/ProductListing";
import { useEffect, useState } from "react";
import Breadcrumbs from "./components/Breadcrumbs";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>hello</h1>
        <Breadcrumbs />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductListing />} />
          <Route path="/products/:id" element={<ProductDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
