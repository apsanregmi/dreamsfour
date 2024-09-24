import React from 'react';
import MenuItem from './MenuItem';

const MenuList = ({ items, addToCart }) => {
  return (
    <div>
      {items.map((item) => (
        <div key={item.id}>
          <MenuItem item={item} />
          <button
            onClick={() => addToCart(item)}
            className="bg-blue-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default MenuList;
