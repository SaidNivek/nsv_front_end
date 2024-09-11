import './App.css';
import Navbar from './components/Generic_Components/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import Services from './pages/Services';
import ContactUs from './pages/ContactUs';
import Footer from './components/Generic_Components/Footer';
import { Routes, Route } from 'react-router-dom'

function App() {
  return ( 
  <div className="max-w-[1440px] main-div">
      <div >
          <Navbar />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contactus" element={<ContactUs />} />            
          </Routes>
        </div>
          <Footer />
      </div>
  </div>
  );
}

export default App;
