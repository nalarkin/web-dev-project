import Product from '../../models/product';
// import div from '../../models/product';
import AddToCartButton from '../cart/AddToCartButton';
// import Gallery from './Gallery.client';
// import ProductOptions from './ProductOptions.client';
// import Seo from './Seo.client';

// function ProductPriceMarkup() {
//   return (
//     <div className="flex md:flex-col items-end font-semibold text-lg md:items-start md:mb-4">
//       <div.SelectedVariant.Price
//         priceType="compareAt"
//         className="text-gray-500 line-through text-lg mr-2.5"
//       >
//         {({ amount, currencyNarrowSymbol }) =>
//           `${currencyNarrowSymbol}${amount}`
//         }
//       </div.SelectedVariant.Price>
//       <div.SelectedVariant.Price className="text-gray-900">
//         {({ currencyCode, amount, currencyNarrowSymbol }) =>
//           `${currencyCode} ${currencyNarrowSymbol}${amount}`
//         }
//       </div.SelectedVariant.Price>
//       <div.SelectedVariant.UnitPrice className="text-gray-500">
//         {({ currencyCode, amount, currencyNarrowSymbol, referenceUnit }) =>
//           `${currencyCode} ${currencyNarrowSymbol}${amount}/${referenceUnit}`
//         }
//       </div.SelectedVariant.UnitPrice>
//     </div>
//   );
// }

function AddToCartMarkup({ product }: { product: Product }) {
  // const { selectedVariant } = useProduct();
  const isOutOfStock = product.quantity <= 0;

  return (
    <div className="space-y-2 mb-8">
      <AddToCartButton product={product} />
      {
        isOutOfStock ? (
          <p className="text-black text-center">Available in 2-3 weeks</p>
        ) : null
        // <button className={BUTTON_SECONDARY_CLASSES}>Buy it now</button>
      }
    </div>
  );
}

export default function ProductDetails({ product }: { product: Product }) {
  return (
    <>
      {/* <Seo product={product} /> */}
      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-[2fr,1fr] gap-x-8 my-16">
          <div className="md:hidden mt-5 mb-8">
            {/* <h1 className="text-4xl font-bold text-black mb-4">
              {product.name && (
                <div className="text-sm font-medium mb-2 text-gray-900">
                  {product.name}
                </div>
              )}
            </h1> */}

            <span />
            <img src={product.image_url} alt={product.name} />
          </div>

          <div>
            <div className="hidden md:block">
              {/* <h1 className="text-5xl font-bold text-black mb-4">
                {product.name && (
                  <div className="text-sm font-medium mb-2 text-gray-900">
                    {product.name}
                  </div>
                )}
              </h1> */}

              {/* <div className="text-gray-900 text-xl">$69.69</div> */}
              <div className="w-full grid">
                {/* <Image src={product.image_url} width={1000} /> */}
                <img src={product.image_url} alt={product.name} />
              </div>

              {/* <ProductPriceMarkup /> */}
            </div>
            {/* Product Options */}
          </div>
          <div className="mt-8 flex flex-col gap-5">
            <h1 className="text-gray-900 text-2xl">{product.name}</h1>
            <h2 className="text-gray-900 text-xl">${product.price}</h2>
            <h2 className="text-gray-900 text-xl">Stock: {product.quantity}</h2>

            <AddToCartMarkup product={product} />
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
}
