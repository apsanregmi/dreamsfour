import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import menuData from "../../data/menu.json"; // Assuming your data is stored here
import newItemData from "../../data/newItem.json"; // Import newItem.json as well

const RecommendedItem = ({ addToCart }) => {
  const router = useRouter();
  const { recommendedItemId } = router.query; // Get recommendedItemId from URL

  const [recommendedItem, setRecommendedItem] = useState(null);

  useEffect(() => {
    if (recommendedItemId) {
      // Find the item with the matching ID in menuData or newItemData
      const menuItem = menuData.menu.find((i) => i.id === parseInt(recommendedItemId, 10));
      const newItem = newItemData.newItems.find((i) => i.id === parseInt(recommendedItemId, 10));

      // Set the recommended item if found in either JSON file
      if (menuItem) {
        setRecommendedItem(menuItem);
      } else if (newItem) {
        setRecommendedItem(newItem);
      } else {
        setRecommendedItem(null); // Optional: handle case where no match is found
      }
    }
  }, [recommendedItemId]); // Update when the query changes

  if (!recommendedItem) {
    return <p>Loading...</p>; // Optional: Show loading or fallback UI
  }

  return (
    <div className="border border-gray-200 rounded-lg md:p-6 p-1 flex items-center justify-between mb-6 relative shadow-lg">
      <div className="flex items-center">
        <img
          src={recommendedItem.image}
          alt={recommendedItem.slideTitle||recommendedItem.slideCategoryTitle } // Handle both names
          className="rounded-full w-16 h-16 object-cover"
        />
        <div className="ml-4">
          <h3 className="text-xl font-bold text-gray-900">
            {recommendedItem.slideTitle||recommendedItem.slideCategoryTitle} {/* Handle both names */}
          </h3>
          <p className="text-gray-600">{recommendedItem.description}</p>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <span className="text-2xl font-bold text-gray-900">{recommendedItem.price}</span>
        <button
          onClick={() => addToCart(recommendedItem)}
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
