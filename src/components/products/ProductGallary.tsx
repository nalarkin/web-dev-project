import React from 'react';

import Product from '../../models/product';
import ProductCard from '../ProductCard';

interface ProductGallaryProps {
  title: string;
  products: Product[];
  isSecret?: boolean;
}

const ProductGallary = ({
  title,
  products,
  isSecret = false,
}: ProductGallaryProps) => {
  return (
    <>
      <h1 className="font-bold text-4xl md:text-5xl text-gray-900 mb-6 mt-6">
        {title}
      </h1>
      {/* <RawHtml string={collection.descriptionHtml} className="text-lg" /> */}
      <p className="text-sm text-gray-500 mt-5 mb-5">
        {products.length} {products.length > 1 ? 'products' : 'product'}
      </p>

      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {products.map((product: Product) => (
          <li key={product._id?.toString()}>
            <ProductCard product={product} isSecret={isSecret} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default ProductGallary;
