import { Product } from "../data-types";

const BASE_URL: string = "http://localhost:3001";

export const getProducts = (): Promise<Product[]> => {
  return fetch(`${BASE_URL}/products`)
    .then(response => response.json());
}

export const createProduct = (product: Product): Promise<Product> => (
  fetch(`${BASE_URL}/products`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(product),
  })
    .then(response => response.json())
);
