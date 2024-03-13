import React from "react";
import ProductCardSkeleton from "./ProductCardSkeleton";

const ProductCollectionSkeleton = () => {
  return (
    <div className="grid grid-cols-1 mt-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-4 gap-x-2 gap-y-8">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
        <ProductCardSkeleton key={value} />
      ))}
    </div>
  );
};

export default ProductCollectionSkeleton;
