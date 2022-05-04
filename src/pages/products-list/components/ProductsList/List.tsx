import React from "react";

import { ProductCard } from "../ProductCard/ProductCard";
import { Product } from "../../../../data-types";

type Props = {
  products: Product[]
}

export const List: React.FC<Props> = ({ products }) => {
  return (
    <ul>
      {products.map(item => (
        <div key={item.id}>
          <ProductCard product={item}  />
        </div>
      ))}
    </ul>
  )
}
