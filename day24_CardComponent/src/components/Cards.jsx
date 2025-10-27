import React from 'react';
import { products } from '../data/products';

const Cards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {products.map((product, index) => (
        <div
          key={index}
          className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow flex flex-col"
        >
          {/* Product Image */}
          <img
            src={product.img}
            alt={product.productName}
            className="w-full h-48 object-cover"
          />

          <div className="p-5 flex flex-col flex-grow">
            {/* Product Name */}
            <h2 className="text-xl font-semibold mb-2">{product.productName}</h2>
            
            {/* Stock Status */}
            <p className={`mb-2 font-medium ${product.stock ? 'text-green-600' : 'text-red-600'}`}>
              {product.stock ? 'In Stock' : 'Out of Stock'}
            </p>
            
            {/* Description */}
            <p className="text-gray-700 mb-3 flex-grow">{product.desc}</p>
            
            {/* Price */}
            <p className="font-bold text-lg mb-3">${product.price}</p>

            {/* Add to Cart Button */}
            <button className="bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition-colors mt-auto">
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
