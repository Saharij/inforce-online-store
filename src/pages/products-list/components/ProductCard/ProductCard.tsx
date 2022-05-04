import React from 'react';
import { Product } from '../../../../data-types';
import { Button } from '../../../components/Button/Button';

import './ProductCard.scss';

type Props = {
  product: Product,
}

export const ProductCard: React.FC<Props> = ({ product }) => {

  const handleOpenInfo = () => {};

  return (
    <div className="card">
      <div className="card__image-container">
        <img
          alt={product.name}
          src={product.imageUrl}
          className="card__image-item"
        />
      </div>
      <div className="card__header">
        <p className="card__header-count">
          <span className="card__header-count-span">
            In stock:&nbsp;
          </span>
          {product.count}
        </p>
        <h3 className="card__header-name">
          {product.name}
        </h3>
      </div>
      <div className="card__button">
        <Button
          type="button"
          isDisabled={false}
          content="Open details"
          onClick={handleOpenInfo}
        />
      </div>
    </div>
  );
};
