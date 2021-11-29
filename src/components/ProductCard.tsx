import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import Product from '../models/product';

interface ProductCardProps {
  product: Product;
  isSecret?: boolean;
}

const ProductCard = ({ product, isSecret = false }: ProductCardProps) => {
  const href = isSecret
    ? `/secrets/${product._id}`
    : `/products/${product._id}`;
  return (
    <div className="text-md mb-4 relative">
      {/* <Link to={`/products/${product._id}`}> */}
      <Link href={href}>
        <a className="rounded-lg border-2 border-gray-200 mb-2 relative flex items-center justify-center overflow-hidden object-cover h-96">
          {product.image_url ? (
            <div className="bg-white absolute w-full h-full flex items-center justify-center">
              <Image
                className="transition-all duration-500 ease-in-out transform bg-center bg-cover object-center object-contain hover:scale-110"
                src={product.image_url}
                // layout="fill"
                width="300"
                height="400"
                alt={product.name}
              />
            </div>
          ) : null}
          {product.quantity <= 0 && (
            <div className="absolute top-3 left-3 rounded-3xl text-xs bg-black text-white py-3 px-4">
              Out of stock
            </div>
          )}
        </a>
      </Link>

      <a>
        <span className="text-black font-semibold mb-0.5">{product.name}</span>
      </a>

      <a>
        <div className="flex ">{`$${product.price}`}</div>
      </a>

      {/* {product.vendor && (
          <p className="text-gray-900 font-medium text-sm mb-0.5">
            {product.vendor}
          </p>
        )}

        <div className="flex ">
          {selectedVariant.compareAtPriceV2 && (
            <MoneyCompareAtPrice money={selectedVariant.compareAtPriceV2} />
          )}
          <MoneyPrice money={selectedVariant.priceV2} /> 
          </div>
          */}
      {/* </a> */}
    </div>
  );
};

export default ProductCard;
