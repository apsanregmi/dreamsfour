import React from 'react';
import Link from 'next/link';

function NewItemCard({ id, image, slideTitle, description, price }) {
  return (
    <div className="reguler-items-wrap">
      <div className="item-img">
        <img className="img-fluid" src={image} alt={slideTitle} />
        <div className="price">
          <h5>{price}</h5>
        </div>
      </div>
      <div className="reguler-items-content">
        <h3>
          {/* Link to menu1 page with the item's ID as a query parameter */}
          <Link  legacyBehavior
            href={{ 
              pathname: "/menu1", 
              query: { recommendedItemId: id }  // Pass the id as a query param
            }}
          >
            <a>{slideTitle}</a>
          </Link>
        </h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default NewItemCard;
