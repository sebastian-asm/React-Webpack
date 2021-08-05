import React, { useContext } from 'react';

import AppContext from '../context/AppContext';
import Product from './Product';

import '../styles/components/Products.scss';

export default function Products() {
  const { state, addToCart } = useContext(AppContext);
  const { products } = state;

  const handleAddToCart = (product) => {
    const randomId = Math.floor(Math.random() * 1000);
    addToCart({ productId: `${product.id}-${randomId}`, ...product });
  };

  return (
    <div className="Products">
      <div className="Products-items">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
}
