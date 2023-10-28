import React from 'react'
import Hero from '../components/Hero'
import CardLayout from '../components/Blogs'
import AddBlog from '../components/AddBlog'

const Home = () => {
  return (
    <div>
      <Hero />
      <CardLayout />
      <AddBlog />
    </div>
  )
}

export default Home
