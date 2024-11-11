import './App.css';
import Navbar from './components/navbar/navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ShopCategory from './pages/ShopCategory';
import Hero from './components/Hero/Hero';  // Import Hero
import Popular from './components/Popular/Popular';
import Offers from './components/Offers/Offers';
import Product from './pages/Product';
import LoginSignup from './pages/LoginSignup';
import Cart from './pages/Cart';
import Item from './components/Item/Item';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar /> {/* This will render the Navbar component */}
        
        {/* Render Hero component here */}
        <Hero />  {/* This is where the Hero section is rendered */}
        <Popular />
        <Offers />
        <Item />

        <Routes>
          <Route path="/" element={<ShopCategory category="Shop" />} />
          <Route path="/samsung" element={<ShopCategory category="samsung" />} />
          <Route path="/iphone" element={<ShopCategory category="iphone" />} />
          <Route path="/pixel" element={<ShopCategory category="pixel" />} />
          <Route path="/product">
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
