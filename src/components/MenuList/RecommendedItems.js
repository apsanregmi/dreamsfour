import React from 'react';

const RecommendedItem = ({ item, addToCart }) => {
  return (
    <div className="border border-gray-200 rounded-lg p-6 flex items-center justify-between mb-6 relative shadow-lg">
      <div className="flex items-center">
        <img
          src={item.image}
          alt={item.slideTitle}
          className="rounded-full w-16 h-16 object-cover"
        />
        <div className="ml-4">
          <h3 className="text-xl font-bold text-gray-900">{item.slideCategoryTitle}</h3>
          <p className="text-gray-600">{item.description}</p>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <span className="text-2xl font-bold text-gray-900">{item.price}</span>
        <button
          onClick={() => addToCart(item)}
          className="bg-yellow-500 text-white px-4 py-2 rounded-full hover:bg-yellow-600 transition"
        >
          +
        </button>
      </div>
      {/* Recommended tag */}
      <div className="bg-yellow-500 text-white rounded-full px-3 py-1 absolute top-[-12px] right-[-10px] text-sm font-semibold shadow-md">
        Recommended
      </div>
    </div>
  );
};

export default RecommendedItem;
