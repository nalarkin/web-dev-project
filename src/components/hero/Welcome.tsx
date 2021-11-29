export default function Welcome() {
  return (
    <div className="text-gray-900 pt-16 rounded-[40px] my-16 px-4 xl:px-12 bg-gradient-to-b from-white -mx-4 xl:-mx-12">
      <div className="text-center mb-16">
        <h1 className="font-extrabold mb-4 text-5xl md:text-7xl">
          School Supplies at Prices You&apos;ll love
        </h1>
        <p className="text-lg mb-8">Great products at even greater prices</p>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-8 text-gray-700">
          {/* <DocsButton
            url="https://shopify.dev/custom-storefronts/hydrogen"
            label="Browse Hydrogen documentation"
          />
          <DocsButton url="/graphql" label="Open the GraphiQL explorer" />
          <DocsButton
            url="https://github.com/Shopify/hydrogen-examples"
            label="Explore Hydrogen examples"
          /> */}
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        {/* <StorefrontInfo
          shopName={shopName}
          totalProducts={totalProducts}
          totalCollections={totalCollections}
        />
        <TemplateLinks
          firstProductPath={firstProduct}
          firstCollectionPath={firstCollection}
        /> */}
      </div>
    </div>
  );
}
