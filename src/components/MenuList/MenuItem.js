import React from 'react';

const MenuItem = ({ item, index }) => {
  return (
    <li className="flex items-center space-x-4">
      {/* Displaying the Image */}
      <div className="w-12 h-12 flex-shrink-0 rounded-full overflow-hidden">
        <img src={item.image} alt={item.slideCategoryTitle} className="w-full h-full object-cover" />
      </div>
      
      {/* Menu Content */}
      <div className="menu-content flex-1 ">
        <div className="menu-title flex justify-between items-center">
          <h4 className="text-lg font-semibold">{item.slideCategoryTitle}</h4>
          <span className="text-lg font-bold text-gray-700">${item.price}</span>
        </div>
        <p className="text-sm text-gray-500">{item.description}</p>
      </div>
    </li>
  );
};

export default MenuItem;
