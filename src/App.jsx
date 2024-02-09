import './App.css';
import Navbar from './components/Generic_Components/Navbar';
import Home from './containers/Home';
import Products from './containers/Products';
import Services from './containers/Services';
import ContactUs from './containers/ContactUs';
import Footer from './components/Generic_Components/Footer';
import { Routes, Route } from 'react-router-dom'

function App() {
  return ( 
  <div className="max-w-[1440px] main-div">
      <div >
          <Navbar />
        <div className="main-div">
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
