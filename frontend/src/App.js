import './App.css';
import Navbar from './components/navbar/navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero/Hero'; 
import Popular from './components/Popular/Popular';
import Offers from './components/Offers/Offers';
import Product from './pages/Product';
import LoginSignup from './pages/LoginSignup';
import Cart from './pages/Cart';
import NewCollections from './components/NewCollections/NewCollections';
import Footer from './components/Footer/Footer';
import iphone_banner from './components/assets/iphone_banner.png';
import samsung_banner from './components/assets/samsung_banner.png';
import pixel_banner from './components/assets/pixel-banner.png';
import NewsLetter from './components/NewsLetter/NewsLetter';
import ShopCategory from './pages/ShopCategory';
import Checkout from './components/CheckoutItems/CheckoutItems';




function App() {
  return (
    <div>
    <BrowserRouter>
    <Navbar />
     
      <Routes>
        <Route path="/" element={
          <>       
          <Hero />
          <Popular />
          <Offers />
            <NewCollections />
            <NewsLetter />
            <ShopCategory category="Shop" />
            </>
          } />
          
          {/* Other routes */}
          <Route path="/samsung" element={<ShopCategory banner={samsung_banner} category="samsung" />} />
          <Route path="/iphone" element={<ShopCategory banner={iphone_banner} category="iphone" />} />
          <Route path="/pixel" element={<ShopCategory banner={pixel_banner} category="pixel" />} />
          <Route path="/product">
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
          <Route path="/checkout" element={<Checkout />} />
          
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}
          

export default App;
