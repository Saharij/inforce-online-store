import './App.css';
import { Routes, Route, Navigate } from "react-router-dom";

import { Product } from './pages/product/Product';
import { ListPage } from './pages/products-list/ListPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<ListPage />} />
      <Route path="/product-info" element={<Product />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
