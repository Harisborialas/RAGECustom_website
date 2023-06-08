import { useState } from 'react';

const Blogsection = () => {
     // State for current page
  const [currentPage, setCurrentPage] = useState(1);

  // Define the total number of pages
  const totalPage = 3;

  // Function to handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
    // Add your logic to fetch blog posts for the selected page
  };
  return (
    <>
      <div className="row mb-4">
          <div className="col-12 col-md-4 mb-3">
            <div className="card rounded shadow" id="">
              <img
                src="/pics_svgs/placeholder.svg"
                className="card-img-top rounded-top"
                alt="..."
                
              />
              <div className="card-body">
                <h1 className='blog-section-heading'>6 Best Smartphone for e-Sport  Pro Player</h1>
                <p className="blog-section-text mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod... 
                </p>
                <p className="blog-admin-text mb-3">
                  <span className="admin-text-span">Admin</span> -  12 Jan 2021
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4 mb-3">
            <div className="card rounded shadow" id="">
              <img
                src="/pics_svgs/placeholder.svg"
                className="card-img-top rounded-top"
                alt="..."
                
              />
              <div className="card-body">
                <h1 className='blog-section-heading'>6 Best Smartphone for e-Sport  Pro Player</h1>
                <p className="blog-section-text mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod... 
                </p>
                <p className="blog-admin-text mb-3">
                  <span className="admin-text-span">Admin</span> -  12 Jan 2021
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4 mb-3">
            <div className="card rounded shadow" id="">
              <img
                src="/pics_svgs/placeholder.svg"
                className="card-img-top rounded-top"
                alt="..."
                
              />
              <div className="card-body">
                <h1 className='blog-section-heading'>6 Best Smartphone for e-Sport  Pro Player</h1>
                <p className="blog-section-text mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod... 
                </p>
                <p className="blog-admin-text mb-3">
                  <span className="admin-text-span">Admin</span> -  12 Jan 2021
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row mb-4">
          <div className="col-12 col-md-4 mb-3">
            <div className="card rounded shadow" id="">
              <img
                src="/pics_svgs/placeholder.svg"
                className="card-img-top rounded-top"
                alt="..."
                
              />
              <div className="card-body">
                <h1 className='blog-section-heading'>6 Best Smartphone for e-Sport  Pro Player</h1>
                <p className="blog-section-text mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod... 
                </p>
                <p className="blog-admin-text mb-3">
                  <span className="admin-text-span">Admin</span> -  12 Jan 2021
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4 mb-3">
            <div className="card rounded shadow" id="">
              <img
                src="/pics_svgs/placeholder.svg"
                className="card-img-top rounded-top"
                alt="..."
                
              />
              <div className="card-body">
                <h1 className='blog-section-heading'>6 Best Smartphone for e-Sport  Pro Player</h1>
                <p className="blog-section-text mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod... 
                </p>
                <p className="blog-admin-text mb-3">
                  <span className="admin-text-span">Admin</span> -  12 Jan 2021
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4 mb-3">
            <div className="card rounded shadow" id="">
              <img
                src="/pics_svgs/placeholder.svg"
                className="card-img-top rounded-top"
                alt="..."
                
              />
              <div className="card-body">
                <h1 className='blog-section-heading'>6 Best Smartphone for e-Sport  Pro Player</h1>
                <p className="blog-section-text mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod... 
                </p>
                <p className="blog-admin-text mb-3">
                  <span className="admin-text-span">Admin</span> -  12 Jan 2021
                </p>
              </div>
            </div>
          </div>
        </div>

        <nav>
        <ul className="pagination justify-content-center">
          <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
            <button className="page-link-arrow" onClick={() => handlePageChange(currentPage - 1)}>
                <img src="/pics_svgs/backarrow.svg" alt="Previous" /> 
            </button>
          </li>
          <li className="page-item">
            <button className={`page-link ${currentPage === 1 ? 'active' : ''}`} onClick={() => handlePageChange(1)}>1</button>
          </li>
          <li className="page-item">
            <button className={`page-link ${currentPage === 2 ? 'active' : ''}`} onClick={() => handlePageChange(2)}>2</button>
          </li>
          <li className="page-item">
            <button className={`page-link ${currentPage === 3 ? 'active' : ''}`} onClick={() => handlePageChange(3)}>3</button>
          </li>
          {/* Add more page buttons as needed */}
          <li className={`page-item ${currentPage === totalPage ? 'disabled' : ''}`}>
            <button className="page-link-arrow" onClick={() => handlePageChange(currentPage + 1)}>
            <img src="/pics_svgs/frontarrow.svg" alt="Next" /> 
            </button>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Blogsection
