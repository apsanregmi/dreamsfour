import React from 'react';

const MenuItem = ({ item }) => {
  return (
    <div className="border-b border-gray-200 py-4 flex justify-between items-center">
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
  );
};

export default MenuItem;
