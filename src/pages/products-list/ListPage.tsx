import React, { useEffect, useState } from "react";

import { Product } from "../../data-types";
import { getProducts } from "../../api/api";
import { List } from "./components/ProductsList/List";
import { ProductCreate } from "./components/ProductAdd/ProductCreate";

export const ListPage: React.FC = () => {
  const [products, setProducts] = useState<Product[] | []>([]);
  const [loadAgain, setLoadAgain] = useState<boolean>(false);
  let newProductId: number = 0;

  useEffect(() => {
    getProducts()
      .then(res => setProducts(res))
  }, [loadAgain])

  if (products.length) {
    newProductId = products[products.length - 1].id + 1;
  }
  return (
    <div className="products-page">
      <ProductCreate
        loadAgain={loadAgain}
        setLoadAgain={setLoadAgain}
        quantity={products.length}
        newProductId={newProductId}
      />
      <List products={products} />
    </div>
  )
}
