import React from 'react'
import Carousel from './carousel/Carousel'
import Tags from './tags/Tags'
import Newarrival from './new_arival/Newarival'
import FeaturedProducts from './fearuredproducts/FeaturedProducts'
import OurCollection from './ourCollections/OurCollection'

const MidContent = () => {
  return (
    <>
      <Carousel/>
      <Tags/>
      <Newarrival/>
      <FeaturedProducts/>
      <OurCollection/>
    </>
  )
}

export default MidContent
