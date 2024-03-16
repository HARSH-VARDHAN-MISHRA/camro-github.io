import React from 'react'
import Carasol from '../../components/carasol/Carasol'
import Subhead from '../../components/subhead/Subhead'
import ProductCard from '../../components/slideProduct/ProductCard'
import PaymentFoot from '../../components/paymentfoot/PaymentFoot'
import Slider from '../../components/slider/Slider'
import Sidecart from '../../components/sidecart/Sidecart'

const Home = () => {
  return (
    <div>
      <Carasol/>
      <Subhead title="trending Products" para="See Our All Specialized Products" />
      <Slider/>
      <Subhead title="new arrivals" para="See Our All Specialized Products" />
      <Slider/>
      <PaymentFoot/>
      <Sidecart/>
    </div>
  )
}

export default Home