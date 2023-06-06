import React from 'react'
import Carousel from './carousel/Carousel'
import Tags from './tags/Tags'
import Newarrival from './new_arival/Newarival'
import Products from './products/Products'

const MidContent = () => {
  return (
    <>
      <Carousel/>
      <Tags/>
      <Newarrival/>
    </>
  )
}

export default MidContent
