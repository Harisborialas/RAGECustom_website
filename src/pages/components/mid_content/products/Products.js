import React from "react";
import Image from 'next/image';

const Products = () => {
  return (
    <>
     <div className="container">
      <div className="card custom-card" style={{ width: '18rem' }}>
        <Image src="/product.png" className="card-img-top" alt="Smartphone" width={500} height={300} />
        <div className="card-body text-center">
          <p className="card-text">Smartphone 5G</p>
          <p className="card-price">$299</p>
        </div>
      </div>
    </div>
    </>
  );
};
export default Products