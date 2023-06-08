import React from 'react'
import Searchbar from './Searchbar'
import Categories from './Categories'
import Tagsfiltersection from './Tagsfiltersection'
import Blogfiltersection from './Blogfiltersection'

const Filtersection = () => {
  return (
    <>
     
    <div class="row">
      <div class="col-12 Filter-section-center-content">
      <Searchbar />
      <Categories />
      <Tagsfiltersection />
      <Blogfiltersection />
      </div>
      </div>
      
    </>
  )
}

export default Filtersection
