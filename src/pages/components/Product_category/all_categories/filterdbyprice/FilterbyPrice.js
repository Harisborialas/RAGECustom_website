import { useState } from 'react';

export default function PriceFilter() {
  const [priceRange, setPriceRange] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [isFilterVisible, setIsFilterVisible] = useState(true);

  const handlePriceChange = (event) => {
    const value = event.target.value;
    setPriceRange(value);
    calculateMinMaxPrices(value);
  };

  const calculateMinMaxPrices = (value) => {
    const minValue = 0;
    const maxValue = 1000;
    const range = maxValue - minValue;
    const step = 10;
    const numSteps = range / step;

    const min = Math.floor(value / numSteps) * step;
    const max = min + step;

    setMinPrice(min);
    setMaxPrice(max);

    filterByPrice(min, max);
  };

  const filterByPrice = (min, max) => {
    // Perform filtering logic here based on the selected price range
    // Update the displayed results accordingly
  };

  const toggleFilterVisibility = () => {
    setIsFilterVisible(!isFilterVisible);
  };

  return (
    <div className="container" >
      <div className="row mt-5">
        <div className="col-12">
          <h3 className="headingfilter" onClick={toggleFilterVisibility}>
            Filter by Price
          </h3>
        </div>
      </div>
      {isFilterVisible && (
        <div className="row mt-3">
          <div className="col-12">
            <div>
              <input
                className="form-range"
                type="range"
                id="priceRange"
                name="priceRange"
                min="0"
                max="1000"
                step="10"
                value={priceRange}
                onChange={handlePriceChange}
              />
            </div>
          </div>
          <div className="col-12 mt-2" id="containerfilterborder">
            <span>${minPrice}</span> - <span>${maxPrice}</span>
          </div>
        </div>
      )}
    </div>
  );
}
