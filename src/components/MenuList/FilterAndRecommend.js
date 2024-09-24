import React, { useState } from 'react';
import menuData from "../../data/menu.json";
import RecommendedItem from './RecommendedItems';
import FilterControls from './FilterControls';
import MenuList from './MenuList';

const FilterAndRecommend = ({ addToCart }) => {
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [vegMode, setVegMode] = useState(false);

  const filteredMenu = menuData.menu.filter((item) => {
    const categoryMatch = selectedCategory === 'ALL' || item.foodCategory === selectedCategory;
    const vegMatch = !vegMode || item.foodType === 'Veg';

    return categoryMatch && vegMatch;
  });

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <FilterControls
        categories={['ALL', 'Breakfast', 'Lunch', 'Dinner']}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        vegMode={vegMode}
        setVegMode={setVegMode}
      />

      {/* Static Recommended Item */}
      <RecommendedItem item={menuData.menu[0]} addToCart={addToCart} />

      {/* Dynamic Menu List */}
      <MenuList items={filteredMenu} addToCart={addToCart} />
    </div>
  );
};

export default FilterAndRecommend;
