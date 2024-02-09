import './App.css';
import Navbar from './components/Generic_Components/Navbar';
import Home from './containers/Home';
import Footer from './components/Generic_Components/Footer';

function App() {
  return ( 
  <div className="max-w-[1440px] main-div">
      <div >
          <Navbar />
        <div className="main-div">
          <Home />
        </div>
          <Footer />
      </div>
  </div>
  );
}

export default App;
