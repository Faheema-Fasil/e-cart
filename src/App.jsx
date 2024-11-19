

import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Wishlist from './Pages/Wishlist'
import Home from './Pages/Home'
import Cart from './Pages/Cart'
import View from './Pages/View'
import { Navigate, Route, Routes } from 'react-router-dom'


function App() {


  return (
    <>
   
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/view/:id" element={<View/>} />  
      {/* requesting an invalid route ---- will redirect to home */}
      <Route path="/*" element={<Navigate to={'/'} />} />
    </Routes>
    <Footer/>
    </>
  )
}

export default App
