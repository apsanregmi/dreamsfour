import React, { useState } from 'react';
import menuData from "../../data/menu.json"
const FilterAndRecommend = () => {
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [vegMode, setVegMode] = useState(false);

  const categories = ['ALL', 'Recommended', 'Breakfast', 'Lunch', 'Dinner', 'Beverages'];

  const filteredMenu = menuData.menu.filter((item) => {
    const categoryMatch = selectedCategory === 'ALL' || item.foodCategory === selectedCategory;
    const vegMatch = !vegMode || item.foodType === 'Veg';

    return categoryMatch && vegMatch;
  });

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      {/* Filter Buttons */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex space-x-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 border-b-2 ${
                selectedCategory === category
                  ? 'border-yellow-500 text-black font-bold'
                  : 'border-transparent text-gray-500'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Veg Mode Toggle */}
        <div className="flex items-center">
          <span className="text-gray-700 mr-2">VEG MODE</span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={vegMode}
              onChange={() => setVegMode(!vegMode)}
            />
            <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-green-300 peer-checked:bg-green-500"></div>
          </label>
        </div>
      </div>

      {/* Recommended Item */}
      {filteredMenu.length > 0 && (
        <div className="border border-gray-200 rounded-lg p-6 flex items-center justify-between">
          <div className="flex items-center">
            <img
              src={filteredMenu[0].image}
              alt={filteredMenu[0].slideTitle}
              className="rounded-full w-16 h-16 object-cover"
            />
            <div className="ml-4">
              <h3 className="text-xl font-bold">{filteredMenu[0].slideCategoryTitle}</h3>
              <p className="text-gray-600">{filteredMenu[0].description}</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-2xl font-bold text-gray-900">{filteredMenu[0].price}</span>
            <button className="bg-yellow-500 text-white px-3 py-2 rounded-full">+</button>
          </div>
          <div className="bg-yellow-500 text-white rounded-full px-3 py-1 absolute top-2 right-2">
            Recommended
          </div>
        </div>
      )}

      {/* Menu List */}
      <div className="mt-6">
        {filteredMenu.map((item) => (
          <div
            key={item.id}
            className="border-b border-gray-200 py-4 flex justify-between items-center"
          >
            <div className="flex items-center">
              <img
                src={item.image}
                alt={item.slideTitle}
                className="rounded-full w-10 h-10 object-cover"
              />
              <div className="ml-4">
                <h4 className="text-lg font-semibold">{item.slideCategoryTitle}</h4>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            </div>
            <span className="text-lg font-bold">{item.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterAndRecommend;
