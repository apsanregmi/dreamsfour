import React from 'react';
import MenuItem from './MenuItem';

// Helper function to group items by foodCategory
const groupByCategory = (items) => {
  return items.reduce((acc, item) => {
    if (!acc[item.foodCategory]) {
      acc[item.foodCategory] = [];
    }
    acc[item.foodCategory].push(item);
    return acc;
  }, {});
};

const MenuList = ({ items, addToCart }) => {
  const groupedItems = groupByCategory(items);  // Group items by foodCategory

  return (
    <div className="menu-list p-4">
      {/* Dynamically rendering each category */}
      {Object.keys(groupedItems).map((category) => (
        <div key={category} className="mb-8">
          <h2 className="text-center text-2xl font-semibold my-6">{category}</h2> {/* Dynamic Category Title */}
          <ul className="divide-y divide-gray-200">
            {groupedItems[category].map((item, index) => (
              <li key={item.id} className="flex justify-between items-center py-4">
                <MenuItem item={item} index={index} />
                <button
                  onClick={() => addToCart(item)}
                  className="w-10 h-10 bg-white border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-200 transition duration-300 shadow-md"
                >
                  +
                </button>
              </li>
            ))}
          </ul>
        </div>
      ))}
      <div className="notice-location mt-8 text-center text-gray-500">
        <h4 className="font-semibold mb-2">
          <span className="text-red-600">N.B:</span> All food is available in the restaurant. Please don’t waste your food.
        </h4>
        <p>Address: Mirpur DOHS, House No-167/170, Avenue-01.</p>
      </div>
    </div>
  );
};

export default MenuList;
