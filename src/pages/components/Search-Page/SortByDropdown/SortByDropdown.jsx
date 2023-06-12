import React from 'react';

const SortByDropdown = () => {
  return (
    <div className="form-group d-flex">
      <label htmlFor="sort-by" className='w-100'>Sort by:</label>
      <select className="form-control m-0" id="sort-by">
        <option>Newest Items</option>
        <option>Oldest Items</option>
        <option>Alphabetical (A-Z)</option>
        <option>Alphabetical (Z-A)</option>
      </select>
    </div>
  );
};

export default SortByDropdown;
