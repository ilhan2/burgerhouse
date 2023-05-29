import React from 'react'
import HeroTop from '../components/marketing/pageSections/HeroTop'
import LastProducts from '../components/marketing/pageSections/LastProducts'
import Products from '../components/marketing/pageSections/Products'
import Event from '../components/marketing/pageSections/Event'
import Booking from '../components/marketing/pageSections/Booking'


export default function HomePage() {
  return (
    <>
    <HeroTop />
    <LastProducts />
    <Products />
    <Event />
    <Booking />
    </>
  )
}
