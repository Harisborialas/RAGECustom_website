import React, { useState } from 'react';

function QuantityCounter() {
  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className='p-0 mt-4'>
      <button onClick={decrementQuantity} className='minusButton'>-</button>
      <span className='btn-mid-qty'>{quantity}</span>
      <button onClick={incrementQuantity} className='plusButton'>+</button>
    </div>
  );
}

export default QuantityCounter;
