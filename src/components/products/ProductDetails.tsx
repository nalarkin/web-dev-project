import Product from '../../models/product';
// import div from '../../models/product';
import { BUTTON_SECONDARY_CLASSES } from '../Button';
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
      {isOutOfStock ? (
        <p className="text-black text-center">Available in 2-3 weeks</p>
      ) : (
        <button className={BUTTON_SECONDARY_CLASSES}>Buy it now</button>
      )}
    </div>
  );
}

// function SizeChart() {
//   return (
//     <>
//       <h3
//         className="text-xl text-black font-semibold mt-8 mb-4"
//         id="size-chart"
//       >
//         Size Chart
//       </h3>
//       <table className="min-w-full table-fixed text-sm text-center bg-white">
//         <thead>
//           <tr className="bg-black text-white">
//             <th className="w-1/4 py-2 px-4 font-normal">Board Size</th>
//             <th className="w-1/4 py-2 px-4 font-normal">154</th>
//             <th className="w-1/4 py-2 px-4 font-normal">158</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td className="p-3 border border-black">Weight Range</td>
//             <td className="p-3 border border-black">120-180 lbs. /54-82kg</td>
//             <td className="p-3 border border-black">150-200 lbs. /68-91 kg</td>
//           </tr>
//           <tr>
//             <td className="p-3 border border-black">Waist Width</td>
//             <td className="p-3 border border-black">246mm</td>
//             <td className="p-3 border border-black">255mm</td>
//           </tr>
//           <tr>
//             <td className="p-3 border border-black">Stance Width</td>
//             <td className="p-3 border border-black">-40</td>
//             <td className="p-3 border border-black">-40</td>
//           </tr>
//           <tr>
//             <td className="p-3 border border-black">Binding Sizes</td>
//             <td className="p-3 border border-black">
//               Men&rsquo;s S/M, Women&rsquo;s S/M
//             </td>
//             <td className="p-3 border border-black">
//               Men&rsquo;s L, Women&rsquo;s L
//             </td>
//           </tr>
//         </tbody>
//       </table>
//     </>
//   );
// }

export default function ProductDetails({ product }: { product: Product }) {
  return (
    <>
      {/* <Seo product={product} /> */}
      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-[2fr,1fr] gap-x-8 my-16">
          <div className="md:hidden mt-5 mb-8">
            <h1 className="text-4xl font-bold text-black mb-4">
              {product.name && (
                <div className="text-sm font-medium mb-2 text-gray-900">
                  {product.name}
                </div>
              )}
            </h1>

            <span />
            <div className="flex justify-between md:block">
              $39.30
              {/* <ProductPriceMarkup /> */}
            </div>
          </div>

          <div>
            <div className="hidden md:block">
              <h1 className="text-5xl font-bold text-black mb-4">
                {product.name && (
                  <div className="text-sm font-medium mb-2 text-gray-900">
                    {product.name}
                  </div>
                )}
              </h1>

              <div>$69.69</div>
              <div className="w-full grid">
                {/* <Image src={product.image_url} width={1000} /> */}
                <img src={product.image_url} alt={product.name} />
              </div>

              {/* <ProductPriceMarkup /> */}
            </div>
            {/* Product Options */}
          </div>
          <div className="mt-8">
            <h2>{product.name}</h2>
            <h2>{product.price}</h2>
            <h2>{product.quantity}</h2>

            <AddToCartMarkup product={product} />
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
}
