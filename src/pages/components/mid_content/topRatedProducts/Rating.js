const Rating = () => {
  return (
    <>
      <div className="d-flex justify-content-center">
        <p className="rating-product-value me-2">5.0</p>
        <span style={{ color: "#FFD687" }}>
          <div class="rating">
            <label for="stars-rating-5">
              <i class="fa fa-star"></i>
            </label>
            <label for="stars-rating-4">
              <i class="fa fa-star"></i>
            </label>
            <label for="stars-rating-3">
              <i class="fa fa-star"></i>
            </label>
            <label for="stars-rating-2">
              <i class="fa fa-star"></i>
            </label>
            <label for="stars-rating-1">
              <i class="fa fa-star"></i>
            </label>
          </div>
        </span>
      </div>
    </>
  );
};

export default Rating;
