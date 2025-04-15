import React from "react";

function Filter({ onCategoryChange, selectedCategory }) {
  return (
    <div className="filter">
      <select name="filter" onChange={onCategoryChange} value={selectedCategory}>
        <option value="All">All</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
