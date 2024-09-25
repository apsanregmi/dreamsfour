import React from 'react';

const MenuItem = ({ item, index, addToCart }) => {
  return (
    <li className="flex items-center justify-between py-4 border-b border-dotted">
      {/* Displaying the Image */}
      <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
        <img 
          src={item.image} 
          alt={item.slideCategoryTitle} 
          className="w-full h-full object-cover" 
        />
      </div>
      
      {/* Menu Content */}
      <div className="menu-content flex-1 ml-4">
        <h4 className="text-md font-semibold text-gray-900">{item.slideCategoryTitle}</h4>
        <p className="text-sm text-gray-500">{item.description}</p>
      </div>

      {/* Price */}
      <div className="text-lg font-bold text-gray-900">
        ${item.price}
      </div>

      {/* Add to Cart Button */}
      <button
        onClick={() => addToCart(item)}
        className="ml-4 flex items-center justify-center w-8 h-8 border border-yellow-500 text-yellow-500 rounded-full hover:bg-yellow-500 hover:text-white transition"
      >
        +
      </button>
    </li>
  );
};

export default MenuItem;
