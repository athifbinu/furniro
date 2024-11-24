import React, { useRef } from "react";

const ProductCard = ({ product, index, activeIndex, setActiveIndex }) => {
  const isActive = index === activeIndex;
  const cardRef = useRef(null);

  // Handle mouse enter to show the cart style
  const handleMouseEnter = () => {
    setActiveIndex(index);
  };

  // Handle mouse leave to hide the cart style
  const handleMouseLeave = () => {
    setActiveIndex(null);
  };

  return (
    <div
      ref={cardRef}
      className="relative border rounded-lg shadow-md overflow-hidden cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover transition-transform transform hover:scale-105"
      />

      <div className="p-4 bg-blue-50">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-sm text-gray-500">{product.description}</p>
        <p className="text-xl font-bold text-yellow-700">{product.price}</p>
        {product.oldPrice && (
          <p className="text-sm line-through text-gray-400">
            {product.oldPrice}
          </p>
        )}
      </div>

      {/* Conditional Overlay */}
      {isActive && (
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center space-y-4 transition-opacity">
          <button className="bg-yellow-600 text-white px-4 py-2 rounded-md hover:bg-yellow-700 transition">
            Add to Cart
          </button>
          <div className="flex gap-4 text-white">
            <span>🔄 Compare</span>
            <span>❤️ Like</span>
            <span>🔗 Share</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
