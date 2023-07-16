import React from "react"
import {NavbarP, Home, About, Product, Service, Contact, Footer} from './components'

function App() {

  return (
    <>
      <NavbarP/>
      <Home/>
      
      <div className=" py-10 m-2 ">
      <About/>
      <Product/>
      <Service/>
      <Contact/>
      </div>
      <Footer/>

    </>
  )
}

export default App
