import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer'
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import men_banner from './Components/Assets/bannerMen1.jpg'
import women_banner from './Components/Assets/bannerWomen1.jpg'
import kids_banner from './Components/Assets/bannerKids1.jpg'


function App() {
  return (
    <div>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/mens" element={<ShopCategory banner={men_banner} category="men" />} />
            <Route path="/womens" element={<ShopCategory banner={women_banner} category="women" />} />
            <Route path="/kids" element={<ShopCategory banner={kids_banner} category="kid" />} />
            <Route path='product' element={<Product/>}>
              <Route path=':productId' element={<Product />} />
            </Route>
            <Route path="/cart" element={<Cart />} />
          </Routes>
          <Footer />
        </Router>
        
    </div>
  );
}

export default App;
