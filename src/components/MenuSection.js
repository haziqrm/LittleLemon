import React from "react";

const menuItems = [
  {
    image: "/assets/greekSalad.jpg",
    title: "Greek Salad",
    price: "$12.99",
    description: "Fresh lettuce, tomatoes, feta cheese, and olives.",
  },
  {
    image: "/assets/bruchetta.svg",
    title: "Bruschetta",
    price: "$7.99",
    description: "Grilled bread with tomatoes, garlic, and basil.",
  },
  {
    image: "/assets/lemonDessert.jpg",
    title: "Lemon Dessert",
    price: "$5.99",
    description: "Tangy lemon cake with cream topping.",
  },
];

function MenuSection() {
  return (
    <div className="menu-section">
      <h2>This Week's Specials</h2>
      <div className="menu-grid">
        {menuItems.map((item, i) => (
          <div key={i} className="menu-item">
            <img src={item.image} alt={item.title} />
            <h3>{item.title} <span class = "price">{item.price}</span></h3>
            <p>{item.description}</p>
            <button>Order Now</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MenuSection;