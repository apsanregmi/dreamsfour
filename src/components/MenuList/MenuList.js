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
  const groupedItems = groupByCategory(items); // Group items by foodCategory

  return (
    <div className="menu-list md:p-6 p-1 max-w-4xl mx-auto">
      {/* Dynamically rendering each category */}
      {Object.keys(groupedItems).map((category) => (
        <div key={category} className="mb-12">
          <h2 className="text-center text-3xl font-semibold text-yellow-600 mb-6">
            {category}
          </h2> {/* Dynamic Category Title */}
          <ul className="divide-y divide-gray-200">
            {groupedItems[category].map((item, index) => (
              <li
                key={item.id}
                className="flex justify-between items-center py-6"
              >
                <div className="flex items-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-full mr-4 shadow-lg"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      {item.slideTitle}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="flex items-center">
                  <span className="text-xl font-semibold text-gray-800 mr-6">
                    {item.price}
                  </span>
                  <button
                    onClick={() => addToCart(item)}
                    className="w-10 h-10 bg-yellow-500 text-white rounded-full flex items-center justify-center hover:bg-yellow-600 transition duration-300 shadow-md"
                  >
                    +
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}

      <div className="notice-location mt-12 text-center text-gray-500">
        <h4 className="font-semibold mb-2">
          <span className="text-red-600">N.B:</span> All food is available in the restaurant. Please don’t waste your food.
        </h4>
        <p>Address: Mirpur DOHS, House No-167/170, Avenue-01.</p>
      </div>
    </div>
  );
};

export default MenuList;
