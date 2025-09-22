{/* <p>Now I can render any React component on any DOM node I want using ReactDOM.render</p>
 */}

import React, { useState } from "react";
import Menu from "./Menu";
import "../styles/App.css"

const menuData = [
  {
    id: 1,
    name: "Pancakes",
    category: "Breakfast",
    price: "$5.99",
    img: "https://www.marthastewart.com/thmb/Vgb9cQSlegZz5fcoSbkkqyHPmHY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/338185-basic-pancakes-09-00b18f8418fd4e52bb2050173d083d04.jpg",
  },
  {
    id: 2,
    name: "Omelette",
    category: "Breakfast",
    price: "$6.49",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH7iqq1h9BQabL7Z5T6Z8bQvAIFxWA_PMJcw&s",
  },
  {
    id: 3,
    name: "Burger",
    category: "Lunch",
    price: "$8.99",
    img: "https://www.foodandwine.com/thmb/DI29Houjc_ccAtFKly0BbVsusHc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/crispy-comte-cheesburgers-FT-RECIPE0921-6166c6552b7148e8a8561f7765ddf20b.jpg",
  },
  {
    id: 4,
    name: "Sandwich",
    category: "Lunch",
    price: "$7.99",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCfOde5gSz5gM5dHuYq2FL6NWcfS8D4Vsrzw&s",
  },
  {
    id: 5,
    name: "Chocolate Shake",
    category: "Shakes",
    price: "$4.99",
    img: "https://cookilicious.com/wp-content/uploads/2025/01/Brownie-Milkshake-Recipe-20-scaled.jpg",
  },
  {
    id: 6,
    name: "Strawberry Shake",
    category: "Shakes",
    price: "$4.49",
    img: "https://www.cookingclassy.com/wp-content/uploads/2024/05/strawberry-milkshake-4.jpg",
  },
];

export default function App() {
  const [items, setItems] = useState(menuData);
  const [category, setCategory] = useState("All");

  const filterItems = (cat) => {
    setCategory(cat);
    if (cat === "All") {
      setItems(menuData);
    } else {
      setItems(menuData.filter((item) => item.category === cat));
    }
  };

  return (
    <div id="main">
      <h1 className="title">Menu Application</h1>

      <div className="buttons">
        <button id="filter-btn-1" onClick={() => filterItems("Breakfast")}>
          Breakfast
        </button>
        <button id="filter-btn-2" onClick={() => filterItems("Lunch")}>
          Lunch
        </button>
        <button id="filter-btn-3" onClick={() => filterItems("Shakes")}>
          Shakes
        </button>
        <button onClick={() => filterItems("All")}>All</button>
      </div>

      <Menu items={items} />
    </div>
  );
}

