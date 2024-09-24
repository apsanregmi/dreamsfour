import React from 'react';

const FilterControls = ({ categories, selectedCategory, setSelectedCategory, vegMode, setVegMode }) => {
  return (
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
  );
};

export default FilterControls;
