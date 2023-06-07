import React from 'react'
import Blogcollection from './BlogCollection'


const Blog = () => {
  return (
    <>
        <div className="container mt-5">
        <div className="row">
          <div className="col-12">
            <h1 className="mt-5 mb-4 text-center" id="blog-heading-text">
              Blog
            </h1>
          </div>
        </div>
        <Blogcollection/>
      </div>

      
    </>
  )
}

export default Blog