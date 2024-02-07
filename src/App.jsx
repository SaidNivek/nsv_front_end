import './App.css';
import styles from  './style'
import Navbar from './components/Generic_Components/Navbar';
import Home from './containers/Home';
import Footer from './components/Generic_Components/Footer';

function App() {
  return (
  <div>
      <div >
          <Navbar />
        <div>
          <Home />
        </div>
          <Footer />
      </div>
  </div>
  );
}

export default App;
