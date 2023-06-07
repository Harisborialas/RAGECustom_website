import React from 'react'
import Carousel from './carousel/Carousel'
import Tags from './tags/Tags'
import Newarrival from './new_arival/Newarival'
import FeaturedProducts from './fearuredproducts/FeaturedProducts'
import OurCollection from './ourCollections/OurCollection'
import Blog from './blog/Blog'
import Newsletter from '../footer/newsLetter/Newsletter'
import FlashSale from './flashSale/FlashSale'

const MidContent = () => {
  return (
    <>
      <Carousel/>
      <Tags/>
      <Newarrival/>
      <FeaturedProducts/>
      <OurCollection/>
      <FlashSale/>
      <Blog/>
    </>
  )
}

export default MidContent
