import React from "react";

export default function Menu({ items }) {
  return (
    <div className="menu-container">
      {items.map((item) => (
        <div
          key={item.id}
          className="menu-item"
          data-test-id={`menu-item-${item.category.toLowerCase()}`}
        >
          <img src={item.img} alt={item.name} className="menu-img" />
          <div className="menu-content">
            <div className="menu-header">
              <h3>{item.name}</h3>
              <p>{item.price}</p>
            </div>
            <p className="menu-desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              facilisis.
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
