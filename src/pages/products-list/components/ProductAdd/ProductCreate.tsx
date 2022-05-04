import React, { useState, ChangeEvent, Dispatch, SetStateAction } from "react";

import "./ProductCreate.scss";
import { Modal } from "../../../components/Modal/Modal";
import { Input } from "../../../components/Input/Input";
import { Button } from "../../../components/Button/Button";
import { createProduct } from "../../../../api/api";

const productInitial = {
  name: "",
  imageUrl: "",
  count: 0,
  weight: "",
}

type Props = {
  newProductId: number,
  loadAgain: boolean,
  quantity: number,
  setLoadAgain: Dispatch<SetStateAction<boolean>>,
}

export const ProductCreate: React.FC<Props> =
({
  quantity,
  newProductId,
  loadAgain,
  setLoadAgain
}) => {
  const [active, setActive] = useState<boolean>(false);
  const [product, setProduct] = useState(productInitial);
  const { name, imageUrl, count, weight } = product;
  const isSubmitDisabled = !name || !imageUrl || count < 1 || !weight;

  const handleModalActive = () => {
    setActive(true)
  };

  const handleCreate = (e: React.FormEvent) => {
    e.preventDefault();

    createProduct({
      id: newProductId,
      size: {
        width: 200,
        height: 200,
      },
      comments: null,
      ...product,
    })
      .then(() => {
        setActive(false)
        setLoadAgain(!loadAgain)
        setProduct(productInitial)
      })
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement> ) => {
    setProduct((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="product-add">
      <h2>
        Quantity of all products:&nbsp;
        {quantity}
      </h2>
      <Button
        type="button"
        content="Add new product"
        isDisabled={false}
        onClick={handleModalActive}
      />
      <Modal active={active} setActive={setActive}>
        <form className="product-add__form">
          <Input
            name="name"
            type="text"
            placeholder="Name"
            value={product.name}
            onChange={handleChange}
          />
          <Input
            name="imageUrl"
            type="text"
            placeholder="Put a link image from internet"
            value={product.imageUrl}
            onChange={handleChange}
          />
          <Input
            name="count"
            type="number"
            placeholder="Quantity of all products"
            value={product.count}
            onChange={handleChange}
          />
          <Input
            name="weight"
            type="text"
            placeholder="Wight in grams"
            value={product.weight}
            onChange={handleChange}
          />
          <Button
            type="submit"
            onClick={handleCreate}
            isDisabled={isSubmitDisabled}
            content="Create new product"
          />
        </form>
      </Modal>
    </div>
  )
}
