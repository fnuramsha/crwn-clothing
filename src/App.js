import React from "react";
const App = () => {
  const categories = [
    {
      id: 1,
      title: "HATS",
    },
    {
      id: 1,
      title: "JACKETS",
    },
    {
      id: 1,
      title: "SNEAKERS",
    },
    {
      id: 1,
      title: "WOMENS",
    },
    {
      id: 1,
      title: "MENS",
    },
  ];
  return (
    <div className="categories-container">
      {categories.map(({ title }) => (
        <div className="category-container">
          {/* {img} */}
          <div className="category-body-container">
            <h2> {title} </h2>
            <p> SHOP NOW </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
